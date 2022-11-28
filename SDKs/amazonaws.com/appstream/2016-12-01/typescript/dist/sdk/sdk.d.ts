import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://appstream2.{region}.amazonaws.com", "https://appstream2.{region}.amazonaws.com", "http://appstream2.{region}.amazonaws.com.cn", "https://appstream2.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateFleet - Associates the specified fleet with the specified stack.
    **/
    associateFleet(req: operations.AssociateFleetRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFleetResponse>;
    /**
     * batchAssociateUserStack - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
    **/
    batchAssociateUserStack(req: operations.BatchAssociateUserStackRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateUserStackResponse>;
    /**
     * batchDisassociateUserStack - Disassociates the specified users from the specified stacks.
    **/
    batchDisassociateUserStack(req: operations.BatchDisassociateUserStackRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateUserStackResponse>;
    /**
     * copyImage - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
    **/
    copyImage(req: operations.CopyImageRequest, config?: AxiosRequestConfig): Promise<operations.CopyImageResponse>;
    /**
     * createDirectoryConfig - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
    **/
    createDirectoryConfig(req: operations.CreateDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectoryConfigResponse>;
    /**
     * createFleet - Creates a fleet. A fleet consists of streaming instances that run a specified image.
    **/
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * createImageBuilder - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
    **/
    createImageBuilder(req: operations.CreateImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageBuilderResponse>;
    /**
     * createImageBuilderStreamingUrl - Creates a URL to start an image builder streaming session.
    **/
    createImageBuilderStreamingUrl(req: operations.CreateImageBuilderStreamingUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageBuilderStreamingUrlResponse>;
    /**
     * createStack - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
    **/
    createStack(req: operations.CreateStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateStackResponse>;
    /**
     * createStreamingUrl - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
    **/
    createStreamingUrl(req: operations.CreateStreamingUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingUrlResponse>;
    /**
     * createUpdatedImage - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
    **/
    createUpdatedImage(req: operations.CreateUpdatedImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdatedImageResponse>;
    /**
     * createUsageReportSubscription - Creates a usage report subscription. Usage reports are generated daily.
    **/
    createUsageReportSubscription(req: operations.CreateUsageReportSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsageReportSubscriptionResponse>;
    /**
     * createUser - Creates a new user in the user pool.
    **/
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * deleteDirectoryConfig - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
    **/
    deleteDirectoryConfig(req: operations.DeleteDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectoryConfigResponse>;
    /**
     * deleteFleet - Deletes the specified fleet.
    **/
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * deleteImage - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
    **/
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * deleteImageBuilder - Deletes the specified image builder and releases the capacity.
    **/
    deleteImageBuilder(req: operations.DeleteImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageBuilderResponse>;
    /**
     * deleteImagePermissions - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
    **/
    deleteImagePermissions(req: operations.DeleteImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagePermissionsResponse>;
    /**
     * deleteStack - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
    **/
    deleteStack(req: operations.DeleteStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStackResponse>;
    /**
     * deleteUsageReportSubscription - Disables usage report generation.
    **/
    deleteUsageReportSubscription(req: operations.DeleteUsageReportSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsageReportSubscriptionResponse>;
    /**
     * deleteUser - Deletes a user from the user pool.
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * describeDirectoryConfigs - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
    **/
    describeDirectoryConfigs(req: operations.DescribeDirectoryConfigsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectoryConfigsResponse>;
    /**
     * describeFleets - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
    **/
    describeFleets(req: operations.DescribeFleetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetsResponse>;
    /**
     * describeImageBuilders - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
    **/
    describeImageBuilders(req: operations.DescribeImageBuildersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageBuildersResponse>;
    /**
     * describeImagePermissions - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
    **/
    describeImagePermissions(req: operations.DescribeImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagePermissionsResponse>;
    /**
     * describeImages - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
    **/
    describeImages(req: operations.DescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagesResponse>;
    /**
     * describeSessions - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
    **/
    describeSessions(req: operations.DescribeSessionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSessionsResponse>;
    /**
     * describeStacks - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
    **/
    describeStacks(req: operations.DescribeStacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStacksResponse>;
    /**
     * describeUsageReportSubscriptions - Retrieves a list that describes one or more usage report subscriptions.
    **/
    describeUsageReportSubscriptions(req: operations.DescribeUsageReportSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUsageReportSubscriptionsResponse>;
    /**
     * describeUserStackAssociations - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
    **/
    describeUserStackAssociations(req: operations.DescribeUserStackAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserStackAssociationsResponse>;
    /**
     * describeUsers - Retrieves a list that describes one or more specified users in the user pool.
    **/
    describeUsers(req: operations.DescribeUsersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUsersResponse>;
    /**
     * disableUser - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user.
    **/
    disableUser(req: operations.DisableUserRequest, config?: AxiosRequestConfig): Promise<operations.DisableUserResponse>;
    /**
     * disassociateFleet - Disassociates the specified fleet from the specified stack.
    **/
    disassociateFleet(req: operations.DisassociateFleetRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFleetResponse>;
    /**
     * enableUser - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
    **/
    enableUser(req: operations.EnableUserRequest, config?: AxiosRequestConfig): Promise<operations.EnableUserResponse>;
    /**
     * expireSession - Immediately stops the specified streaming session.
    **/
    expireSession(req: operations.ExpireSessionRequest, config?: AxiosRequestConfig): Promise<operations.ExpireSessionResponse>;
    /**
     * listAssociatedFleets - Retrieves the name of the fleet that is associated with the specified stack.
    **/
    listAssociatedFleets(req: operations.ListAssociatedFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedFleetsResponse>;
    /**
     * listAssociatedStacks - Retrieves the name of the stack with which the specified fleet is associated.
    **/
    listAssociatedStacks(req: operations.ListAssociatedStacksRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedStacksResponse>;
    /**
     * listTagsForResource - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startFleet - Starts the specified fleet.
    **/
    startFleet(req: operations.StartFleetRequest, config?: AxiosRequestConfig): Promise<operations.StartFleetResponse>;
    /**
     * startImageBuilder - Starts the specified image builder.
    **/
    startImageBuilder(req: operations.StartImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.StartImageBuilderResponse>;
    /**
     * stopFleet - Stops the specified fleet.
    **/
    stopFleet(req: operations.StopFleetRequest, config?: AxiosRequestConfig): Promise<operations.StopFleetResponse>;
    /**
     * stopImageBuilder - Stops the specified image builder.
    **/
    stopImageBuilder(req: operations.StopImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.StopImageBuilderResponse>;
    /**
     * tagResource - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateDirectoryConfig - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
    **/
    updateDirectoryConfig(req: operations.UpdateDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDirectoryConfigResponse>;
    /**
     * updateFleet - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name. If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes. If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
    **/
    updateFleet(req: operations.UpdateFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetResponse>;
    /**
     * updateImagePermissions - Adds or updates permissions for the specified private image.
    **/
    updateImagePermissions(req: operations.UpdateImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImagePermissionsResponse>;
    /**
     * updateStack - Updates the specified fields for the specified stack.
    **/
    updateStack(req: operations.UpdateStackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStackResponse>;
}
export {};
