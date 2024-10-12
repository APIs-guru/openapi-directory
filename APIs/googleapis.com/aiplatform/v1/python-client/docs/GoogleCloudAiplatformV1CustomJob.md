# GoogleCloudAiplatformV1CustomJob

Represents a job that runs custom workloads such as a Docker container or a Python package. A CustomJob can have multiple worker pools and each worker pool can have its own machine and input spec. A CustomJob will be cleaned up once the job enters terminal state (failed or succeeded).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the CustomJob was created. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the CustomJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Time when the CustomJob entered any of the following states: &#x60;JOB_STATE_SUCCEEDED&#x60;, &#x60;JOB_STATE_FAILED&#x60;, &#x60;JOB_STATE_CANCELLED&#x60;. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**job_spec** | [**GoogleCloudAiplatformV1CustomJobSpec**](GoogleCloudAiplatformV1CustomJobSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize CustomJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**name** | **str** | Output only. Resource name of a CustomJob. | [optional] [readonly] 
**start_time** | **str** | Output only. Time when the CustomJob for the first time entered the &#x60;JOB_STATE_RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the job. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the CustomJob was most recently updated. | [optional] [readonly] 
**web_access_uris** | **Dict[str, str]** | Output only. URIs for accessing [interactive shells](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) (one URI for each training node). Only available if job_spec.enable_web_access is &#x60;true&#x60;. The keys are names of each node in the training job; for example, &#x60;workerpool0-0&#x60; for the primary node, &#x60;workerpool1-0&#x60; for the first node in the second worker pool, and &#x60;workerpool1-1&#x60; for the second node in the second worker pool. The values are the URIs for each node&#39;s interactive shell. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_custom_job import GoogleCloudAiplatformV1CustomJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CustomJob from a JSON string
google_cloud_aiplatform_v1_custom_job_instance = GoogleCloudAiplatformV1CustomJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CustomJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_custom_job_dict = google_cloud_aiplatform_v1_custom_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CustomJob from a dict
google_cloud_aiplatform_v1_custom_job_from_dict = GoogleCloudAiplatformV1CustomJob.from_dict(google_cloud_aiplatform_v1_custom_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


