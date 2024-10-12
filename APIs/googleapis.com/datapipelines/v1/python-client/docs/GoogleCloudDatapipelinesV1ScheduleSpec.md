# GoogleCloudDatapipelinesV1ScheduleSpec

Details of the schedule the pipeline runs on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_job_time** | **str** | Output only. When the next Scheduler job is going to run. | [optional] [readonly] 
**schedule** | **str** | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. | [optional] 
**time_zone** | **str** | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_schedule_spec import GoogleCloudDatapipelinesV1ScheduleSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1ScheduleSpec from a JSON string
google_cloud_datapipelines_v1_schedule_spec_instance = GoogleCloudDatapipelinesV1ScheduleSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1ScheduleSpec.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_schedule_spec_dict = google_cloud_datapipelines_v1_schedule_spec_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1ScheduleSpec from a dict
google_cloud_datapipelines_v1_schedule_spec_from_dict = GoogleCloudDatapipelinesV1ScheduleSpec.from_dict(google_cloud_datapipelines_v1_schedule_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


