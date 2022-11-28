import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://braket.{region}.amazonaws.com", "https://braket.{region}.amazonaws.com", "http://braket.{region}.amazonaws.com.cn", "https://braket.{region}.amazonaws.com.cn"];
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
     * cancelQuantumTask - Cancels the specified task.
    **/
    cancelQuantumTask(req: operations.CancelQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelQuantumTaskResponse>;
    /**
     * createQuantumTask - Creates a quantum task.
    **/
    createQuantumTask(req: operations.CreateQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateQuantumTaskResponse>;
    /**
     * getDevice - Retrieves the devices available in Amazon Braket.
    **/
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * getQuantumTask - Retrieves the specified quantum task.
    **/
    getQuantumTask(req: operations.GetQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetQuantumTaskResponse>;
    /**
     * listTagsForResource - Shows the tags associated with this resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * searchDevices - Searches for devices using the specified filters.
    **/
    searchDevices(req: operations.SearchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchDevicesResponse>;
    /**
     * searchQuantumTasks - Searches for tasks that match the specified filter values.
    **/
    searchQuantumTasks(req: operations.SearchQuantumTasksRequest, config?: AxiosRequestConfig): Promise<operations.SearchQuantumTasksResponse>;
    /**
     * tagResource - Add a tag to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Remove tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
