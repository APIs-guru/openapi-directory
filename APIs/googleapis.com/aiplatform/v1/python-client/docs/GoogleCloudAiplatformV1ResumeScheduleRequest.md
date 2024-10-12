# GoogleCloudAiplatformV1ResumeScheduleRequest

Request message for ScheduleService.ResumeSchedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catch_up** | **bool** | Optional. Whether to backfill missed runs when the schedule is resumed from PAUSED state. If set to true, all missed runs will be scheduled. New runs will be scheduled after the backfill is complete. This will also update Schedule.catch_up field. Default to false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_resume_schedule_request import GoogleCloudAiplatformV1ResumeScheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ResumeScheduleRequest from a JSON string
google_cloud_aiplatform_v1_resume_schedule_request_instance = GoogleCloudAiplatformV1ResumeScheduleRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ResumeScheduleRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_resume_schedule_request_dict = google_cloud_aiplatform_v1_resume_schedule_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ResumeScheduleRequest from a dict
google_cloud_aiplatform_v1_resume_schedule_request_from_dict = GoogleCloudAiplatformV1ResumeScheduleRequest.from_dict(google_cloud_aiplatform_v1_resume_schedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


