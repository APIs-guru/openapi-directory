# GoogleCloudAiplatformV1NasJob

Represents a Neural Architecture Search (NAS) job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the NasJob was created. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the NasJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**enable_restricted_image_training** | **bool** | Optional. Enable a separation of Custom model training and restricted image training for tenant project. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Time when the NasJob entered any of the following states: &#x60;JOB_STATE_SUCCEEDED&#x60;, &#x60;JOB_STATE_FAILED&#x60;, &#x60;JOB_STATE_CANCELLED&#x60;. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize NasJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**name** | **str** | Output only. Resource name of the NasJob. | [optional] [readonly] 
**nas_job_output** | [**GoogleCloudAiplatformV1NasJobOutput**](GoogleCloudAiplatformV1NasJobOutput.md) |  | [optional] 
**nas_job_spec** | [**GoogleCloudAiplatformV1NasJobSpec**](GoogleCloudAiplatformV1NasJobSpec.md) |  | [optional] 
**start_time** | **str** | Output only. Time when the NasJob for the first time entered the &#x60;JOB_STATE_RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the job. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the NasJob was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nas_job import GoogleCloudAiplatformV1NasJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NasJob from a JSON string
google_cloud_aiplatform_v1_nas_job_instance = GoogleCloudAiplatformV1NasJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NasJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nas_job_dict = google_cloud_aiplatform_v1_nas_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NasJob from a dict
google_cloud_aiplatform_v1_nas_job_from_dict = GoogleCloudAiplatformV1NasJob.from_dict(google_cloud_aiplatform_v1_nas_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


