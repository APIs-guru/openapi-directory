# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AcceptSharedDirectoryRequest(
    headers=operations.AcceptSharedDirectoryHeaders(
        x_amz_algorithm="accusantium",
        x_amz_content_sha256="facere",
        x_amz_credential="pariatur",
        x_amz_date="ipsum",
        x_amz_security_token="doloremque",
        x_amz_signature="architecto",
        x_amz_signed_headers="temporibus",
        x_amz_target="DirectoryService_20150416.AcceptSharedDirectory",
    ),
    request=shared.AcceptSharedDirectoryRequest(
        shared_directory_id="rem",
    ),
)
    
res = s.sdk.accept_shared_directory(req)

if res.accept_shared_directory_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_shared_directory` - Accepts a directory sharing request that was sent from the directory owner account.
* `add_ip_routes` - <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `add_region` - Adds two domain controllers in the specified Region for the specified directory.
* `add_tags_to_resource` - Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
* `cancel_schema_extension` - Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
* `connect_directory` - <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `create_alias` - <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
* `create_computer` - Creates an Active Directory computer object in the specified directory.
* `create_conditional_forwarder` - Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
* `create_directory` - <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `create_log_subscription` - Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
* `create_microsoft_ad` - <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `create_snapshot` - <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
* `create_trust` - <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
* `delete_conditional_forwarder` - Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
* `delete_directory` - <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `delete_log_subscription` - Deletes the specified log subscription.
* `delete_snapshot` - Deletes a directory snapshot.
* `delete_trust` - Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
* `deregister_certificate` - Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
* `deregister_event_topic` - Removes the specified directory as a publisher to the specified Amazon SNS topic.
* `describe_certificate` - Displays information about the certificate registered for secure LDAP or client certificate authentication.
* `describe_client_authentication_settings` - Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 
* `describe_conditional_forwarders` - <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
* `describe_directories` - <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
* `describe_domain_controllers` - Provides information about any domain controllers in your directory.
* `describe_event_topics` - <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
* `describe_ldaps_settings` - Describes the status of LDAP security for the specified directory.
* `describe_regions` - Provides information about the Regions that are configured for multi-Region replication.
* `describe_shared_directories` - Returns the shared directories in your account. 
* `describe_snapshots` - <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
* `describe_trusts` - <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
* `disable_client_authentication` - Disables alternative client authentication methods for the specified directory. 
* `disable_ldaps` - Deactivates LDAP secure calls for the specified directory.
* `disable_radius` - Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* `disable_sso` - Disables single-sign on for a directory.
* `enable_client_authentication` - Enables alternative client authentication methods for the specified directory.
* `enable_ldaps` - Activates the switch for the specific directory to always use LDAP secure calls.
* `enable_radius` - Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* `enable_sso` - Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
* `get_directory_limits` - Obtains directory limit information for the current Region.
* `get_snapshot_limits` - Obtains the manual snapshot limits for a directory.
* `list_certificates` - For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
* `list_ip_routes` - Lists the address blocks that you have added to a directory.
* `list_log_subscriptions` - Lists the active log subscriptions for the Amazon Web Services account.
* `list_schema_extensions` - Lists all schema extensions applied to a Microsoft AD Directory.
* `list_tags_for_resource` - Lists all tags on a directory.
* `register_certificate` - Registers a certificate for a secure LDAP or client certificate authentication.
* `register_event_topic` - Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
* `reject_shared_directory` - Rejects a directory sharing request that was sent from the directory owner account.
* `remove_ip_routes` - Removes IP address blocks from a directory.
* `remove_region` - Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
* `remove_tags_from_resource` - Removes tags from a directory.
* `reset_user_password` - <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
* `restore_from_snapshot` - <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
* `share_directory` - <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
* `start_schema_extension` - Applies a schema extension to a Microsoft AD directory.
* `unshare_directory` - Stops the directory sharing between the directory owner and consumer accounts. 
* `update_conditional_forwarder` - Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
* `update_number_of_domain_controllers` - Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
* `update_radius` - Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
* `update_trust` - Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
* `verify_trust` - <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
