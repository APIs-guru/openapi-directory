# GoogleCloudAiplatformV1beta1NasJobOutput

Represents a uCAIP NasJob output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_trial_job_output** | [**GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput**](GoogleCloudAiplatformV1beta1NasJobOutputMultiTrialJobOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_job_output import GoogleCloudAiplatformV1beta1NasJobOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasJobOutput from a JSON string
google_cloud_aiplatform_v1beta1_nas_job_output_instance = GoogleCloudAiplatformV1beta1NasJobOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasJobOutput.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_job_output_dict = google_cloud_aiplatform_v1beta1_nas_job_output_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasJobOutput from a dict
google_cloud_aiplatform_v1beta1_nas_job_output_from_dict = GoogleCloudAiplatformV1beta1NasJobOutput.from_dict(google_cloud_aiplatform_v1beta1_nas_job_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


