# GoogleCloudAiplatformV1NasJobOutput

Represents a uCAIP NasJob output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_trial_job_output** | [**GoogleCloudAiplatformV1NasJobOutputMultiTrialJobOutput**](GoogleCloudAiplatformV1NasJobOutputMultiTrialJobOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nas_job_output import GoogleCloudAiplatformV1NasJobOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NasJobOutput from a JSON string
google_cloud_aiplatform_v1_nas_job_output_instance = GoogleCloudAiplatformV1NasJobOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NasJobOutput.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nas_job_output_dict = google_cloud_aiplatform_v1_nas_job_output_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NasJobOutput from a dict
google_cloud_aiplatform_v1_nas_job_output_from_dict = GoogleCloudAiplatformV1NasJobOutput.from_dict(google_cloud_aiplatform_v1_nas_job_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


