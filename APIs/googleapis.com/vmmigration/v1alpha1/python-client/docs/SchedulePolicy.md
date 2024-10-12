# SchedulePolicy

A policy for scheduling replications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_duration** | **str** | The idle duration between replication stages. | [optional] 
**skip_os_adaptation** | **bool** | A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM&#39;s operating system undergoes changes and adaptations to fully function on Compute Engine. | [optional] 

## Example

```python
from openapi_client.models.schedule_policy import SchedulePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulePolicy from a JSON string
schedule_policy_instance = SchedulePolicy.from_json(json)
# print the JSON string representation of the object
print(SchedulePolicy.to_json())

# convert the object into a dict
schedule_policy_dict = schedule_policy_instance.to_dict()
# create an instance of SchedulePolicy from a dict
schedule_policy_from_dict = SchedulePolicy.from_dict(schedule_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


