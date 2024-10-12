# GoogleCloudAiplatformV1Schedule

An instance of a Schedule periodically schedules runs to make API calls based on user specified time specification and API request type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_queueing** | **bool** | Optional. Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped. Default to false. | [optional] 
**catch_up** | **bool** | Output only. Whether to backfill missed runs when the schedule is resumed from PAUSED state. If set to true, all missed runs will be scheduled. New runs will be scheduled after the backfill is complete. Default to false. | [optional] [readonly] 
**create_pipeline_job_request** | [**GoogleCloudAiplatformV1CreatePipelineJobRequest**](GoogleCloudAiplatformV1CreatePipelineJobRequest.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this Schedule was created. | [optional] [readonly] 
**cron** | **str** | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: \&quot;CRON_TZ&#x3D;${IANA_TIME_ZONE}\&quot; or \&quot;TZ&#x3D;${IANA_TIME_ZONE}\&quot;. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, \&quot;CRON_TZ&#x3D;America/New_York 1 * * * *\&quot;, or \&quot;TZ&#x3D;America/New_York 1 * * * *\&quot;. | [optional] 
**display_name** | **str** | Required. User provided name of the Schedule. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**end_time** | **str** | Optional. Timestamp after which no new runs can be scheduled. If specified, The schedule will be completed when either end_time is reached or when scheduled_run_count &gt;&#x3D; max_run_count. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified. | [optional] 
**last_pause_time** | **str** | Output only. Timestamp when this Schedule was last paused. Unset if never paused. | [optional] [readonly] 
**last_resume_time** | **str** | Output only. Timestamp when this Schedule was last resumed. Unset if never resumed from pause. | [optional] [readonly] 
**last_scheduled_run_response** | [**GoogleCloudAiplatformV1ScheduleRunResponse**](GoogleCloudAiplatformV1ScheduleRunResponse.md) |  | [optional] 
**max_concurrent_run_count** | **str** | Required. Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the operations/jobs created by the requests (if applicable). | [optional] 
**max_run_count** | **str** | Optional. Maximum run count of the schedule. If specified, The schedule will be completed when either started_run_count &gt;&#x3D; max_run_count or when end_time is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified. | [optional] 
**name** | **str** | Immutable. The resource name of the Schedule. | [optional] 
**next_run_time** | **str** | Output only. Timestamp when this Schedule should schedule the next run. Having a next_run_time in the past means the runs are being started behind schedule. | [optional] [readonly] 
**start_time** | **str** | Optional. Timestamp after which the first run can be scheduled. Default to Schedule create time if not specified. | [optional] 
**started_run_count** | **str** | Output only. The number of runs started by this schedule. | [optional] [readonly] 
**state** | **str** | Output only. The state of this Schedule. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this Schedule was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schedule import GoogleCloudAiplatformV1Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Schedule from a JSON string
google_cloud_aiplatform_v1_schedule_instance = GoogleCloudAiplatformV1Schedule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Schedule.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schedule_dict = google_cloud_aiplatform_v1_schedule_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Schedule from a dict
google_cloud_aiplatform_v1_schedule_from_dict = GoogleCloudAiplatformV1Schedule.from_dict(google_cloud_aiplatform_v1_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


