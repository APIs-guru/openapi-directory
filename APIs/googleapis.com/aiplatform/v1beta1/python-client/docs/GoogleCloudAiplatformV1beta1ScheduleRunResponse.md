# GoogleCloudAiplatformV1beta1ScheduleRunResponse

Status of a scheduled run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_response** | **str** | The response of the scheduled run. | [optional] 
**scheduled_run_time** | **str** | The scheduled run time based on the user-specified schedule. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schedule_run_response import GoogleCloudAiplatformV1beta1ScheduleRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ScheduleRunResponse from a JSON string
google_cloud_aiplatform_v1beta1_schedule_run_response_instance = GoogleCloudAiplatformV1beta1ScheduleRunResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ScheduleRunResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schedule_run_response_dict = google_cloud_aiplatform_v1beta1_schedule_run_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ScheduleRunResponse from a dict
google_cloud_aiplatform_v1beta1_schedule_run_response_from_dict = GoogleCloudAiplatformV1beta1ScheduleRunResponse.from_dict(google_cloud_aiplatform_v1beta1_schedule_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


