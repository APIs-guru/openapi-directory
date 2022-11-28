# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AssociateFleetRequest, AssociateFleetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateFleetRequest = {
  headers: {
    xAmzAlgorithm: "consequatur",
    xAmzContentSha256: "dolores",
    xAmzCredential: "et",
    xAmzDate: "quos",
    xAmzSecurityToken: "est",
    xAmzSignature: "est",
    xAmzSignedHeaders: "neque",
    xAmzTarget: "PhotonAdminProxyService.AssociateFleet",
  },
  request: {
    fleetName: "quis",
    stackName: "eius",
  },
};

sdk.sdk.associateFleet(req).then((res: AssociateFleetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateFleet` - Associates the specified fleet with the specified stack.
* `batchAssociateUserStack` - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* `batchDisassociateUserStack` - Disassociates the specified users from the specified stacks.
* `copyImage` - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* `createDirectoryConfig` - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `createFleet` - Creates a fleet. A fleet consists of streaming instances that run a specified image.
* `createImageBuilder` - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* `createImageBuilderStreamingUrl` - Creates a URL to start an image builder streaming session.
* `createStack` - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* `createStreamingUrl` - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* `createUpdatedImage` - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `createUsageReportSubscription` - Creates a usage report subscription. Usage reports are generated daily.
* `createUser` - Creates a new user in the user pool.
* `deleteDirectoryConfig` - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* `deleteFleet` - Deletes the specified fleet.
* `deleteImage` - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* `deleteImageBuilder` - Deletes the specified image builder and releases the capacity.
* `deleteImagePermissions` - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* `deleteStack` - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* `deleteUsageReportSubscription` - Disables usage report generation.
* `deleteUser` - Deletes a user from the user pool.
* `describeDirectoryConfigs` - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* `describeFleets` - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* `describeImageBuilders` - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* `describeImagePermissions` - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* `describeImages` - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* `describeSessions` - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* `describeStacks` - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* `describeUsageReportSubscriptions` - Retrieves a list that describes one or more usage report subscriptions.
* `describeUserStackAssociations` - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* `describeUsers` - Retrieves a list that describes one or more specified users in the user pool.
* `disableUser` - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* `disassociateFleet` - Disassociates the specified fleet from the specified stack.
* `enableUser` - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* `expireSession` - Immediately stops the specified streaming session.
* `listAssociatedFleets` - Retrieves the name of the fleet that is associated with the specified stack.
* `listAssociatedStacks` - Retrieves the name of the stack with which the specified fleet is associated.
* `listTagsForResource` - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `startFleet` - Starts the specified fleet.
* `startImageBuilder` - Starts the specified image builder.
* `stopFleet` - Stops the specified fleet.
* `stopImageBuilder` - Stops the specified image builder.
* `tagResource` - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `untagResource` - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* `updateDirectoryConfig` - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* `updateFleet` - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
* `updateImagePermissions` - Adds or updates permissions for the specified private image. 
* `updateStack` - Updates the specified fields for the specified stack.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
