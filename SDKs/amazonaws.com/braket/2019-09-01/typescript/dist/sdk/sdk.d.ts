import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CancelQuantumTask(req: operations.CancelQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelQuantumTaskResponse>;
    CreateQuantumTask(req: operations.CreateQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateQuantumTaskResponse>;
    GetDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    GetQuantumTask(req: operations.GetQuantumTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetQuantumTaskResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    SearchDevices(req: operations.SearchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchDevicesResponse>;
    SearchQuantumTasks(req: operations.SearchQuantumTasksRequest, config?: AxiosRequestConfig): Promise<operations.SearchQuantumTasksResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
