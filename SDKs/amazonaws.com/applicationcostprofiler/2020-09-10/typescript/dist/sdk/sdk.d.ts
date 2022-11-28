import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://application-cost-profiler.{region}.amazonaws.com", "https://application-cost-profiler.{region}.amazonaws.com", "http://application-cost-profiler.{region}.amazonaws.com.cn", "https://application-cost-profiler.{region}.amazonaws.com.cn"];
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
     * deleteReportDefinition - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
    **/
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * getReportDefinition - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
    **/
    getReportDefinition(req: operations.GetReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionResponse>;
    /**
     * importApplicationUsage - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
    **/
    importApplicationUsage(req: operations.ImportApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.ImportApplicationUsageResponse>;
    /**
     * listReportDefinitions - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
    **/
    listReportDefinitions(req: operations.ListReportDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportDefinitionsResponse>;
    /**
     * putReportDefinition - Creates the report definition for a report in Application Cost Profiler.
    **/
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * updateReportDefinition - Updates existing report in AWS Application Cost Profiler.
    **/
    updateReportDefinition(req: operations.UpdateReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReportDefinitionResponse>;
}
export {};
