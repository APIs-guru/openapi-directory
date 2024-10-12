# SchedulerStatus

The status and the latest scheduler heartbeat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latest_scheduler_heartbeat** | **str** | The time the scheduler last do a heartbeat. | [optional] [readonly] 
**status** | [**HealthStatus**](HealthStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.scheduler_status import SchedulerStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulerStatus from a JSON string
scheduler_status_instance = SchedulerStatus.from_json(json)
# print the JSON string representation of the object
print(SchedulerStatus.to_json())

# convert the object into a dict
scheduler_status_dict = scheduler_status_instance.to_dict()
# create an instance of SchedulerStatus from a dict
scheduler_status_from_dict = SchedulerStatus.from_dict(scheduler_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


