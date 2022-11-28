import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.fleethub.iot.{region}.amazonaws.com", "https://api.fleethub.iot.{region}.amazonaws.com", "http://api.fleethub.iot.{region}.amazonaws.com.cn", "https://api.fleethub.iot.{region}.amazonaws.com.cn"];
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
     * createApplication - <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * deleteApplication - <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * describeApplication - <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    describeApplication(req: operations.DescribeApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationResponse>;
    /**
     * listApplications - <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * listTagsForResource - <p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApplication - <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
export {};
