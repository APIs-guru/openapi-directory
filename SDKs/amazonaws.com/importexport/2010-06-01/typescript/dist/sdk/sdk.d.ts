import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://importexport.amazonaws.com", "https://importexport.amazonaws.com", "http://importexport.{region}.amazonaws.com.cn", "https://importexport.{region}.amazonaws.com.cn"];
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
     * getCancelJob - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
    **/
    getCancelJob(req: operations.GetCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.GetCancelJobResponse>;
    /**
     * getCreateJob - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
    **/
    getCreateJob(req: operations.GetCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateJobResponse>;
    /**
     * getGetShippingLabel - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
    **/
    getGetShippingLabel(req: operations.GetGetShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetGetShippingLabelResponse>;
    /**
     * getGetStatus - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
    **/
    getGetStatus(req: operations.GetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetGetStatusResponse>;
    /**
     * getListJobs - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
    **/
    getListJobs(req: operations.GetListJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetListJobsResponse>;
    /**
     * getUpdateJob - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
    **/
    getUpdateJob(req: operations.GetUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateJobResponse>;
    /**
     * postCancelJob - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
    **/
    postCancelJob(req: operations.PostCancelJobRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelJobResponse>;
    /**
     * postCreateJob - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
    **/
    postCreateJob(req: operations.PostCreateJobRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateJobResponse>;
    /**
     * postGetShippingLabel - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
    **/
    postGetShippingLabel(req: operations.PostGetShippingLabelRequest, config?: AxiosRequestConfig): Promise<operations.PostGetShippingLabelResponse>;
    /**
     * postGetStatus - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
    **/
    postGetStatus(req: operations.PostGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostGetStatusResponse>;
    /**
     * postListJobs - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
    **/
    postListJobs(req: operations.PostListJobsRequest, config?: AxiosRequestConfig): Promise<operations.PostListJobsResponse>;
    /**
     * postUpdateJob - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
    **/
    postUpdateJob(req: operations.PostUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateJobResponse>;
}
export {};
