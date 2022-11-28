import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://data.jobs.iot.{region}.amazonaws.com", "https://data.jobs.iot.{region}.amazonaws.com", "http://data.jobs.iot.{region}.amazonaws.com.cn", "https://data.jobs.iot.{region}.amazonaws.com.cn"];
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
     * describeJobExecution - Gets details of a job execution.
    **/
    describeJobExecution(req: operations.DescribeJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobExecutionResponse>;
    /**
     * getPendingJobExecutions - Gets the list of all jobs for a thing that are not in a terminal status.
    **/
    getPendingJobExecutions(req: operations.GetPendingJobExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPendingJobExecutionsResponse>;
    /**
     * startNextPendingJobExecution - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
    **/
    startNextPendingJobExecution(req: operations.StartNextPendingJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartNextPendingJobExecutionResponse>;
    /**
     * updateJobExecution - Updates the status of a job execution.
    **/
    updateJobExecution(req: operations.UpdateJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJobExecutionResponse>;
}
export {};
