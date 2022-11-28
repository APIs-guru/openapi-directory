import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.iotdeviceadvisor.{region}.amazonaws.com", "https://api.iotdeviceadvisor.{region}.amazonaws.com", "http://api.iotdeviceadvisor.{region}.amazonaws.com.cn", "https://api.iotdeviceadvisor.{region}.amazonaws.com.cn"];
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
     * createSuiteDefinition - Creates a Device Advisor test suite.
    **/
    createSuiteDefinition(req: operations.CreateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSuiteDefinitionResponse>;
    /**
     * deleteSuiteDefinition - Deletes a Device Advisor test suite.
    **/
    deleteSuiteDefinition(req: operations.DeleteSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSuiteDefinitionResponse>;
    /**
     * getSuiteDefinition - Gets information about a Device Advisor test suite.
    **/
    getSuiteDefinition(req: operations.GetSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteDefinitionResponse>;
    /**
     * getSuiteRun - Gets information about a Device Advisor test suite run.
    **/
    getSuiteRun(req: operations.GetSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunResponse>;
    /**
     * getSuiteRunReport - Gets a report download link for a successful Device Advisor qualifying test suite run.
    **/
    getSuiteRunReport(req: operations.GetSuiteRunReportRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunReportResponse>;
    /**
     * listSuiteDefinitions - Lists the Device Advisor test suites you have created.
    **/
    listSuiteDefinitions(req: operations.ListSuiteDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteDefinitionsResponse>;
    /**
     * listSuiteRuns - Lists the runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.
    **/
    listSuiteRuns(req: operations.ListSuiteRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteRunsResponse>;
    /**
     * listTagsForResource - Lists the tags attached to an IoT Device Advisor resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startSuiteRun - Starts a Device Advisor test suite run.
    **/
    startSuiteRun(req: operations.StartSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StartSuiteRunResponse>;
    /**
     * stopSuiteRun - Stops a Device Advisor test suite run that is currently running.
    **/
    stopSuiteRun(req: operations.StopSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StopSuiteRunResponse>;
    /**
     * tagResource - Adds to and modifies existing tags of an IoT Device Advisor resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from an IoT Device Advisor resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateSuiteDefinition - Updates a Device Advisor test suite.
    **/
    updateSuiteDefinition(req: operations.UpdateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSuiteDefinitionResponse>;
}
export {};
