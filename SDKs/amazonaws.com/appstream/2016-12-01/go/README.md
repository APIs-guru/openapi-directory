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
    
    req := operations.AssociateFleetRequest{
        Headers: operations.AssociateFleetHeaders{
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "dolores",
            XAmzCredential: "et",
            XAmzDate: "quos",
            XAmzSecurityToken: "est",
            XAmzSignature: "est",
            XAmzSignedHeaders: "neque",
            XAmzTarget: "PhotonAdminProxyService.AssociateFleet",
        },
        Request: shared.AssociateFleetRequest{
            FleetName: "quis",
            StackName: "eius",
        },
    }
    
    res, err := s.Sdk.AssociateFleet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFleetResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateFleet` - Associates the specified fleet with the specified stack.
* `BatchAssociateUserStack` - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* `BatchDisassociateUserStack` - Disassociates the specified users from the specified stacks.
* `CopyImage` - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* `CreateDirectoryConfig` - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `CreateFleet` - Creates a fleet. A fleet consists of streaming instances that run a specified image.
* `CreateImageBuilder` - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* `CreateImageBuilderStreamingURL` - Creates a URL to start an image builder streaming session.
* `CreateStack` - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* `CreateStreamingURL` - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* `CreateUpdatedImage` - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `CreateUsageReportSubscription` - Creates a usage report subscription. Usage reports are generated daily.
* `CreateUser` - Creates a new user in the user pool.
* `DeleteDirectoryConfig` - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* `DeleteFleet` - Deletes the specified fleet.
* `DeleteImage` - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* `DeleteImageBuilder` - Deletes the specified image builder and releases the capacity.
* `DeleteImagePermissions` - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* `DeleteStack` - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* `DeleteUsageReportSubscription` - Disables usage report generation.
* `DeleteUser` - Deletes a user from the user pool.
* `DescribeDirectoryConfigs` - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* `DescribeFleets` - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* `DescribeImageBuilders` - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* `DescribeImagePermissions` - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* `DescribeImages` - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* `DescribeSessions` - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* `DescribeStacks` - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* `DescribeUsageReportSubscriptions` - Retrieves a list that describes one or more usage report subscriptions.
* `DescribeUserStackAssociations` - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* `DescribeUsers` - Retrieves a list that describes one or more specified users in the user pool.
* `DisableUser` - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* `DisassociateFleet` - Disassociates the specified fleet from the specified stack.
* `EnableUser` - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* `ExpireSession` - Immediately stops the specified streaming session.
* `ListAssociatedFleets` - Retrieves the name of the fleet that is associated with the specified stack.
* `ListAssociatedStacks` - Retrieves the name of the stack with which the specified fleet is associated.
* `ListTagsForResource` - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `StartFleet` - Starts the specified fleet.
* `StartImageBuilder` - Starts the specified image builder.
* `StopFleet` - Stops the specified fleet.
* `StopImageBuilder` - Stops the specified image builder.
* `TagResource` - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `UntagResource` - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `UpdateDirectoryConfig` - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `UpdateFleet` - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
* `UpdateImagePermissions` - Adds or updates permissions for the specified private image. 
* `UpdateStack` - Updates the specified fields for the specified stack.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
