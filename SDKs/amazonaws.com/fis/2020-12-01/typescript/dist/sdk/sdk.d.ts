import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://fis.{region}.amazonaws.com", "https://fis.{region}.amazonaws.com", "http://fis.{region}.amazonaws.com.cn", "https://fis.{region}.amazonaws.com.cn"];
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
     * createExperimentTemplate - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
    **/
    createExperimentTemplate(req: operations.CreateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentTemplateResponse>;
    /**
     * deleteExperimentTemplate - Deletes the specified experiment template.
    **/
    deleteExperimentTemplate(req: operations.DeleteExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperimentTemplateResponse>;
    /**
     * getAction - Gets information about the specified AWS FIS action.
    **/
    getAction(req: operations.GetActionRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResponse>;
    /**
     * getExperiment - Gets information about the specified experiment.
    **/
    getExperiment(req: operations.GetExperimentRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentResponse>;
    /**
     * getExperimentTemplate - Gets information about the specified experiment template.
    **/
    getExperimentTemplate(req: operations.GetExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetExperimentTemplateResponse>;
    /**
     * listActions - Lists the available AWS FIS actions.
    **/
    listActions(req: operations.ListActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionsResponse>;
    /**
     * listExperimentTemplates - Lists your experiment templates.
    **/
    listExperimentTemplates(req: operations.ListExperimentTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentTemplatesResponse>;
    /**
     * listExperiments - Lists your experiments.
    **/
    listExperiments(req: operations.ListExperimentsRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentsResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startExperiment - Starts running an experiment from the specified experiment template.
    **/
    startExperiment(req: operations.StartExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StartExperimentResponse>;
    /**
     * stopExperiment - Stops the specified experiment.
    **/
    stopExperiment(req: operations.StopExperimentRequest, config?: AxiosRequestConfig): Promise<operations.StopExperimentResponse>;
    /**
     * tagResource - Applies the specified tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateExperimentTemplate - Updates the specified experiment template.
    **/
    updateExperimentTemplate(req: operations.UpdateExperimentTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentTemplateResponse>;
}
export {};
