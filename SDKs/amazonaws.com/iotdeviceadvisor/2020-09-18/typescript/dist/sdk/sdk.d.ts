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
    CreateSuiteDefinition(req: operations.CreateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSuiteDefinitionResponse>;
    DeleteSuiteDefinition(req: operations.DeleteSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSuiteDefinitionResponse>;
    GetSuiteDefinition(req: operations.GetSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteDefinitionResponse>;
    GetSuiteRun(req: operations.GetSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunResponse>;
    GetSuiteRunReport(req: operations.GetSuiteRunReportRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunReportResponse>;
    ListSuiteDefinitions(req: operations.ListSuiteDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteDefinitionsResponse>;
    ListSuiteRuns(req: operations.ListSuiteRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteRunsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    StartSuiteRun(req: operations.StartSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StartSuiteRunResponse>;
    StopSuiteRun(req: operations.StopSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StopSuiteRunResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateSuiteDefinition(req: operations.UpdateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSuiteDefinitionResponse>;
}
export {};
