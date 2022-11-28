import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://elastictranscoder.{region}.amazonaws.com", "https://elastictranscoder.{region}.amazonaws.com", "http://elastictranscoder.{region}.amazonaws.com.cn", "https://elastictranscoder.{region}.amazonaws.com.cn"];
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
     * cancelJob - <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
    **/
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * createJob - <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
    **/
    createJob(req: operations.CreateJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobResponse>;
    /**
     * createPipeline - The CreatePipeline operation creates a pipeline with settings that you specify.
    **/
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * createPreset - <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
    **/
    createPreset(req: operations.CreatePresetRequest, config?: AxiosRequestConfig): Promise<operations.CreatePresetResponse>;
    /**
     * deletePipeline - <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
    **/
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * deletePreset - <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
    **/
    deletePreset(req: operations.DeletePresetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePresetResponse>;
    /**
     * listJobsByPipeline - <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
    **/
    listJobsByPipeline(req: operations.ListJobsByPipelineRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsByPipelineResponse>;
    /**
     * listJobsByStatus - The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
    **/
    listJobsByStatus(req: operations.ListJobsByStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsByStatusResponse>;
    /**
     * listPipelines - The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
    **/
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * listPresets - The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
    **/
    listPresets(req: operations.ListPresetsRequest, config?: AxiosRequestConfig): Promise<operations.ListPresetsResponse>;
    /**
     * readJob - The ReadJob operation returns detailed information about a job.
    **/
    readJob(req: operations.ReadJobRequest, config?: AxiosRequestConfig): Promise<operations.ReadJobResponse>;
    /**
     * readPipeline - The ReadPipeline operation gets detailed information about a pipeline.
    **/
    readPipeline(req: operations.ReadPipelineRequest, config?: AxiosRequestConfig): Promise<operations.ReadPipelineResponse>;
    /**
     * readPreset - The ReadPreset operation gets detailed information about a preset.
    **/
    readPreset(req: operations.ReadPresetRequest, config?: AxiosRequestConfig): Promise<operations.ReadPresetResponse>;
    /**
     * testRole - <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>
    **/
    testRole(req: operations.TestRoleRequest, config?: AxiosRequestConfig): Promise<operations.TestRoleResponse>;
    /**
     * updatePipeline - <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
    **/
    updatePipeline(req: operations.UpdatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineResponse>;
    /**
     * updatePipelineNotifications - <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
    **/
    updatePipelineNotifications(req: operations.UpdatePipelineNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineNotificationsResponse>;
    /**
     * updatePipelineStatus - <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>
    **/
    updatePipelineStatus(req: operations.UpdatePipelineStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineStatusResponse>;
}
export {};
