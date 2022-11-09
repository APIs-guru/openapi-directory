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
    GetCancelJob(req: operations.GetCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.GetCancelJobResponse>;
    GetCreateJob(req: operations.GetCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateJobResponse>;
    GetGetShippingLabel(req: operations.GetGetShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetGetShippingLabelResponse>;
    GetGetStatus(req: operations.GetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetGetStatusResponse>;
    GetListJobs(req: operations.GetListJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetListJobsResponse>;
    GetUpdateJob(req: operations.GetUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateJobResponse>;
    PostCancelJob(req: operations.PostCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelJobResponse>;
    PostCreateJob(req: operations.PostCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateJobResponse>;
    PostGetShippingLabel(req: operations.PostGetShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.PostGetShippingLabelResponse>;
    PostGetStatus(req: operations.PostGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostGetStatusResponse>;
    PostListJobs(req: operations.PostListJobsRequest, config?: AxiosRequestConfig): Promise<operations.PostListJobsResponse>;
    PostUpdateJob(req: operations.PostUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateJobResponse>;
}
export {};
