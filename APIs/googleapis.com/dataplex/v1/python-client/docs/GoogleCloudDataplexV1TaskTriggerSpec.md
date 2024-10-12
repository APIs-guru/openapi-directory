# GoogleCloudDataplexV1TaskTriggerSpec

Task scheduling and trigger settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks. | [optional] 
**max_retries** | **int** | Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. | [optional] 
**schedule** | **str** | Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: \&quot;CRON_TZ&#x3D;${IANA_TIME_ZONE}\&quot; or \&quot;TZ&#x3D;${IANA_TIME_ZONE}\&quot;. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ&#x3D;America/New_York 1 * * * *, or TZ&#x3D;America/New_York 1 * * * *. This field is required for RECURRING tasks. | [optional] 
**start_time** | **str** | Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING. | [optional] 
**type** | **str** | Required. Immutable. Trigger type of the user-specified Task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_trigger_spec import GoogleCloudDataplexV1TaskTriggerSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskTriggerSpec from a JSON string
google_cloud_dataplex_v1_task_trigger_spec_instance = GoogleCloudDataplexV1TaskTriggerSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskTriggerSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_trigger_spec_dict = google_cloud_dataplex_v1_task_trigger_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskTriggerSpec from a dict
google_cloud_dataplex_v1_task_trigger_spec_from_dict = GoogleCloudDataplexV1TaskTriggerSpec.from_dict(google_cloud_dataplex_v1_task_trigger_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


