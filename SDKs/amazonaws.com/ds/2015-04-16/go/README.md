# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AcceptSharedDirectoryRequest{
        Headers: operations.AcceptSharedDirectoryHeaders{
            XAmzAlgorithm: "accusantium",
            XAmzContentSha256: "facere",
            XAmzCredential: "pariatur",
            XAmzDate: "ipsum",
            XAmzSecurityToken: "doloremque",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "temporibus",
            XAmzTarget: "DirectoryService_20150416.AcceptSharedDirectory",
        },
        Request: shared.AcceptSharedDirectoryRequest{
            SharedDirectoryID: "rem",
        },
    }
    
    res, err := s.Sdk.AcceptSharedDirectory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptSharedDirectoryResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptSharedDirectory` - Accepts a directory sharing request that was sent from the directory owner account.
* `AddIPRoutes` - <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `AddRegion` - Adds two domain controllers in the specified Region for the specified directory.
* `AddTagsToResource` - Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
* `CancelSchemaExtension` - Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
* `ConnectDirectory` - <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `CreateAlias` - <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
* `CreateComputer` - Creates an Active Directory computer object in the specified directory.
* `CreateConditionalForwarder` - Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
* `CreateDirectory` - <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `CreateLogSubscription` - Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
* `CreateMicrosoftAd` - <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `CreateSnapshot` - <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
* `CreateTrust` - <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
* `DeleteConditionalForwarder` - Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
* `DeleteDirectory` - <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* `DeleteLogSubscription` - Deletes the specified log subscription.
* `DeleteSnapshot` - Deletes a directory snapshot.
* `DeleteTrust` - Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
* `DeregisterCertificate` - Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
* `DeregisterEventTopic` - Removes the specified directory as a publisher to the specified Amazon SNS topic.
* `DescribeCertificate` - Displays information about the certificate registered for secure LDAP or client certificate authentication.
* `DescribeClientAuthenticationSettings` - Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 
* `DescribeConditionalForwarders` - <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
* `DescribeDirectories` - <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
* `DescribeDomainControllers` - Provides information about any domain controllers in your directory.
* `DescribeEventTopics` - <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
* `DescribeLdapsSettings` - Describes the status of LDAP security for the specified directory.
* `DescribeRegions` - Provides information about the Regions that are configured for multi-Region replication.
* `DescribeSharedDirectories` - Returns the shared directories in your account. 
* `DescribeSnapshots` - <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
* `DescribeTrusts` - <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
* `DisableClientAuthentication` - Disables alternative client authentication methods for the specified directory. 
* `DisableLdaps` - Deactivates LDAP secure calls for the specified directory.
* `DisableRadius` - Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* `DisableSso` - Disables single-sign on for a directory.
* `EnableClientAuthentication` - Enables alternative client authentication methods for the specified directory.
* `EnableLdaps` - Activates the switch for the specific directory to always use LDAP secure calls.
* `EnableRadius` - Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* `EnableSso` - Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
* `GetDirectoryLimits` - Obtains directory limit information for the current Region.
* `GetSnapshotLimits` - Obtains the manual snapshot limits for a directory.
* `ListCertificates` - For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
* `ListIPRoutes` - Lists the address blocks that you have added to a directory.
* `ListLogSubscriptions` - Lists the active log subscriptions for the Amazon Web Services account.
* `ListSchemaExtensions` - Lists all schema extensions applied to a Microsoft AD Directory.
* `ListTagsForResource` - Lists all tags on a directory.
* `RegisterCertificate` - Registers a certificate for a secure LDAP or client certificate authentication.
* `RegisterEventTopic` - Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
* `RejectSharedDirectory` - Rejects a directory sharing request that was sent from the directory owner account.
* `RemoveIPRoutes` - Removes IP address blocks from a directory.
* `RemoveRegion` - Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
* `RemoveTagsFromResource` - Removes tags from a directory.
* `ResetUserPassword` - <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
* `RestoreFromSnapshot` - <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
* `ShareDirectory` - <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
* `StartSchemaExtension` - Applies a schema extension to a Microsoft AD directory.
* `UnshareDirectory` - Stops the directory sharing between the directory owner and consumer accounts. 
* `UpdateConditionalForwarder` - Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
* `UpdateNumberOfDomainControllers` - Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
* `UpdateRadius` - Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
* `UpdateTrust` - Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
* `VerifyTrust` - <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
