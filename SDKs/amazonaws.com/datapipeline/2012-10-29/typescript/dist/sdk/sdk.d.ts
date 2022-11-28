import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://datapipeline.{region}.amazonaws.com", "https://datapipeline.{region}.amazonaws.com", "http://datapipeline.{region}.amazonaws.com.cn", "https://datapipeline.{region}.amazonaws.com.cn"];
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
     * activatePipeline - <p>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.</p> <p>If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call <a>DeactivatePipeline</a>.</p> <p>To activate a finished pipeline, modify the end date for the pipeline and then activate it.</p>
    **/
    activatePipeline(req: operations.ActivatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.ActivatePipelineResponse>;
    /**
     * addTags - Adds or modifies tags for the specified pipeline.
    **/
    addTags(req: operations.AddTagsRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsResponse>;
    /**
     * createPipeline - Creates a new, empty pipeline. Use <a>PutPipelineDefinition</a> to populate the pipeline.
    **/
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * deactivatePipeline - <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code> state until the deactivation process completes.</p> <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</p>
    **/
    deactivatePipeline(req: operations.DeactivatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeactivatePipelineResponse>;
    /**
     * deletePipeline - <p>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p> <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components. Components that are paused by <a>SetStatus</a> can be resumed.</p>
    **/
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * describeObjects - Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object.
    **/
    describeObjects(req: operations.DescribeObjectsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObjectsResponse>;
    /**
     * describePipelines - <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions.</p> <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
    **/
    describePipelines(req: operations.DescribePipelinesRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelinesResponse>;
    /**
     * evaluateExpression - Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
    **/
    evaluateExpression(req: operations.EvaluateExpressionRequest, config?: AxiosRequestConfig): Promise<operations.EvaluateExpressionResponse>;
    /**
     * getPipelineDefinition - Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve the pipeline definition that you provided using <a>PutPipelineDefinition</a>.
    **/
    getPipelineDefinition(req: operations.GetPipelineDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineDefinitionResponse>;
    /**
     * listPipelines - Lists the pipeline identifiers for all active pipelines that you have permission to access.
    **/
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * pollForTask - <p>Task runners call <code>PollForTask</code> to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the <code>workerGroup</code> parameter. The task returned can come from any of the pipelines that match the <code>workerGroup</code> value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner.</p> <p>If tasks are ready in the work queue, <code>PollForTask</code> returns a response immediately. If no tasks are available in the queue, <code>PollForTask</code> uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call <code>PollForTask</code> again on the same <code>workerGroup</code> until it receives a response, and this can take up to 90 seconds. </p>
    **/
    pollForTask(req: operations.PollForTaskRequest, config?: AxiosRequestConfig): Promise<operations.PollForTaskResponse>;
    /**
     * putPipelineDefinition - <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p> <p> <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline. </p> <ol> <li>An object is missing a name or identifier field.</li> <li>A string or reference field is empty.</li> <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li> <li>The pipeline is in a FINISHED state.</li> </ol> <p> Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action. </p>
    **/
    putPipelineDefinition(req: operations.PutPipelineDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutPipelineDefinitionResponse>;
    /**
     * queryObjects - Queries the specified pipeline for the names of objects that match the specified set of conditions.
    **/
    queryObjects(req: operations.QueryObjectsRequest, config?: AxiosRequestConfig): Promise<operations.QueryObjectsResponse>;
    /**
     * removeTags - Removes existing tags from the specified pipeline.
    **/
    removeTags(req: operations.RemoveTagsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagsResponse>;
    /**
     * reportTaskProgress - <p>Task runners call <code>ReportTaskProgress</code> when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent <a>PollForTask</a> call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a <code>reportProgressTimeout</code> field in your pipeline.</p> <p>If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to <a>PollForTask</a>. Task runners should call <code>ReportTaskProgress</code> every 60 seconds.</p>
    **/
    reportTaskProgress(req: operations.ReportTaskProgressRequest, config?: AxiosRequestConfig): Promise<operations.ReportTaskProgressResponse>;
    /**
     * reportTaskRunnerHeartbeat - Task runners call <code>ReportTaskRunnerHeartbeat</code> every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.
    **/
    reportTaskRunnerHeartbeat(req: operations.ReportTaskRunnerHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.ReportTaskRunnerHeartbeatResponse>;
    /**
     * setStatus - Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.
    **/
    setStatus(req: operations.SetStatusRequest, config?: AxiosRequestConfig): Promise<operations.SetStatusResponse>;
    /**
     * setTaskStatus - Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.
    **/
    setTaskStatus(req: operations.SetTaskStatusRequest, config?: AxiosRequestConfig): Promise<operations.SetTaskStatusResponse>;
    /**
     * validatePipelineDefinition - Validates the specified pipeline definition to ensure that it is well formed and can be run without error.
    **/
    validatePipelineDefinition(req: operations.ValidatePipelineDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePipelineDefinitionResponse>;
}
export {};
