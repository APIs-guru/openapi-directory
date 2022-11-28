import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://projects.iot1click.{region}.amazonaws.com", "https://projects.iot1click.{region}.amazonaws.com", "http://projects.iot1click.{region}.amazonaws.com.cn", "https://projects.iot1click.{region}.amazonaws.com.cn"];
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
     * associateDeviceWithPlacement - Associates a physical device with a placement.
    **/
    associateDeviceWithPlacement(req: operations.AssociateDeviceWithPlacementRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDeviceWithPlacementResponse>;
    /**
     * createPlacement - Creates an empty placement.
    **/
    createPlacement(req: operations.CreatePlacementRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlacementResponse>;
    /**
     * createProject - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deletePlacement - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
    **/
    deletePlacement(req: operations.DeletePlacementRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlacementResponse>;
    /**
     * deleteProject - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * describePlacement - Describes a placement in a project.
    **/
    describePlacement(req: operations.DescribePlacementRequest, config?: AxiosRequestConfig): Promise<operations.DescribePlacementResponse>;
    /**
     * describeProject - Returns an object describing a project.
    **/
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * disassociateDeviceFromPlacement - Removes a physical device from a placement.
    **/
    disassociateDeviceFromPlacement(req: operations.DisassociateDeviceFromPlacementRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDeviceFromPlacementResponse>;
    /**
     * getDevicesInPlacement - Returns an object enumerating the devices in a placement.
    **/
    getDevicesInPlacement(req: operations.GetDevicesInPlacementRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesInPlacementResponse>;
    /**
     * listPlacements - Lists the placement(s) of a project.
    **/
    listPlacements(req: operations.ListPlacementsRequest, config?: AxiosRequestConfig): Promise<operations.ListPlacementsResponse>;
    /**
     * listProjects - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * listTagsForResource - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags (metadata key/value pairs) from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updatePlacement - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
    **/
    updatePlacement(req: operations.UpdatePlacementRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlacementResponse>;
    /**
     * updateProject - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
export {};
