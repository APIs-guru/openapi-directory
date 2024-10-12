# JobRunNotificationEvent

Payload proto for \"clouddeploy.googleapis.com/jobrun_notification\" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_run** | **str** | The name of the &#x60;JobRun&#x60;. | [optional] 
**message** | **str** | Debug message for when a notification fails to send. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**release** | **str** | The name of the &#x60;Release&#x60;. | [optional] 
**release_uid** | **str** | Unique identifier of the &#x60;Release&#x60;. | [optional] 
**rollout** | **str** | The name of the &#x60;Rollout&#x60;. | [optional] 
**rollout_uid** | **str** | Unique identifier of the &#x60;Rollout&#x60;. | [optional] 
**target_id** | **str** | ID of the &#x60;Target&#x60;. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.job_run_notification_event import JobRunNotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of JobRunNotificationEvent from a JSON string
job_run_notification_event_instance = JobRunNotificationEvent.from_json(json)
# print the JSON string representation of the object
print(JobRunNotificationEvent.to_json())

# convert the object into a dict
job_run_notification_event_dict = job_run_notification_event_instance.to_dict()
# create an instance of JobRunNotificationEvent from a dict
job_run_notification_event_from_dict = JobRunNotificationEvent.from_dict(job_run_notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


