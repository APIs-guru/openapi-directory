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
    
req = operations.AssociateFleetRequest(
    headers=operations.AssociateFleetHeaders(
        x_amz_algorithm="consequatur",
        x_amz_content_sha256="dolores",
        x_amz_credential="et",
        x_amz_date="quos",
        x_amz_security_token="est",
        x_amz_signature="est",
        x_amz_signed_headers="neque",
        x_amz_target="PhotonAdminProxyService.AssociateFleet",
    ),
    request=shared.AssociateFleetRequest(
        fleet_name="quis",
        stack_name="eius",
    ),
)
    
res = s.sdk.associate_fleet(req)

if res.associate_fleet_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_fleet` - Associates the specified fleet with the specified stack.
* `batch_associate_user_stack` - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* `batch_disassociate_user_stack` - Disassociates the specified users from the specified stacks.
* `copy_image` - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* `create_directory_config` - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `create_fleet` - Creates a fleet. A fleet consists of streaming instances that run a specified image.
* `create_image_builder` - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* `create_image_builder_streaming_url` - Creates a URL to start an image builder streaming session.
* `create_stack` - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* `create_streaming_url` - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* `create_updated_image` - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `create_usage_report_subscription` - Creates a usage report subscription. Usage reports are generated daily.
* `create_user` - Creates a new user in the user pool.
* `delete_directory_config` - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* `delete_fleet` - Deletes the specified fleet.
* `delete_image` - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* `delete_image_builder` - Deletes the specified image builder and releases the capacity.
* `delete_image_permissions` - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* `delete_stack` - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* `delete_usage_report_subscription` - Disables usage report generation.
* `delete_user` - Deletes a user from the user pool.
* `describe_directory_configs` - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* `describe_fleets` - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* `describe_image_builders` - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* `describe_image_permissions` - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* `describe_images` - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* `describe_sessions` - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* `describe_stacks` - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* `describe_usage_report_subscriptions` - Retrieves a list that describes one or more usage report subscriptions.
* `describe_user_stack_associations` - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* `describe_users` - Retrieves a list that describes one or more specified users in the user pool.
* `disable_user` - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* `disassociate_fleet` - Disassociates the specified fleet from the specified stack.
* `enable_user` - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* `expire_session` - Immediately stops the specified streaming session.
* `list_associated_fleets` - Retrieves the name of the fleet that is associated with the specified stack.
* `list_associated_stacks` - Retrieves the name of the stack with which the specified fleet is associated.
* `list_tags_for_resource` - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `start_fleet` - Starts the specified fleet.
* `start_image_builder` - Starts the specified image builder.
* `stop_fleet` - Stops the specified fleet.
* `stop_image_builder` - Stops the specified image builder.
* `tag_resource` - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `untag_resource` - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `update_directory_config` - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `update_fleet` - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
* `update_image_permissions` - Adds or updates permissions for the specified private image. 
* `update_stack` - Updates the specified fields for the specified stack.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
