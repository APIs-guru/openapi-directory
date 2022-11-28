# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CancelJobRequest(
    path_params=operations.CancelJobPathParams(
        id="tempore",
    ),
    headers=operations.CancelJobHeaders(
        x_amz_algorithm="repellendus",
        x_amz_content_sha256="asperiores",
        x_amz_credential="molestiae",
        x_amz_date="laboriosam",
        x_amz_security_token="reprehenderit",
        x_amz_signature="non",
        x_amz_signed_headers="quis",
    ),
)
    
res = s.sdk.cancel_job(req)

if res.cancel_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancel_job` - <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
* `create_job` - <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
* `create_pipeline` - The CreatePipeline operation creates a pipeline with settings that you specify.
* `create_preset` - <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
* `delete_pipeline` - <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
* `delete_preset` - <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
* `list_jobs_by_pipeline` - <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
* `list_jobs_by_status` - The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
* `list_pipelines` - The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
* `list_presets` - The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
* `read_job` - The ReadJob operation returns detailed information about a job.
* `read_pipeline` - The ReadPipeline operation gets detailed information about a pipeline.
* `read_preset` - The ReadPreset operation gets detailed information about a preset.
* `test_role` - <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>
* `update_pipeline` - <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
* `update_pipeline_notifications` - <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
* `update_pipeline_status` - <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
