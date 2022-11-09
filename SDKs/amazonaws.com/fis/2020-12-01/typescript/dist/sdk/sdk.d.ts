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
    CreateExperimentTemplate(req: operations.CreateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentTemplateResponse>;
    DeleteExperimentTemplate(req: operations.DeleteExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperimentTemplateResponse>;
    GetAction(req: operations.GetActionRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResponse>;
    GetExperiment(req: operations.GetExperimentRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentResponse>;
    GetExperimentTemplate(req: operations.GetExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentTemplateResponse>;
    ListActions(req: operations.ListActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionsResponse>;
    ListExperimentTemplates(req: operations.ListExperimentTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentTemplatesResponse>;
    ListExperiments(req: operations.ListExperimentsRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    StartExperiment(req: operations.StartExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StartExperimentResponse>;
    StopExperiment(req: operations.StopExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StopExperimentResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateExperimentTemplate(req: operations.UpdateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentTemplateResponse>;
}
export {};
