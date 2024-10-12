# MonitorStatusLogGet

The MonitorStatusLog resource is a chronological record of all the changes in status that monitors have undergone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**monitor** | **str** | The monitor that is related to this resource instance. | [optional] 
**monitor_status_code** | **str** | The status of the monitor. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | [optional] 
**ping** | **str** | The ping that triggered this resource instance. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 

## Example

```python
from openapi_client.models.monitor_status_log_get import MonitorStatusLogGet

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorStatusLogGet from a JSON string
monitor_status_log_get_instance = MonitorStatusLogGet.from_json(json)
# print the JSON string representation of the object
print(MonitorStatusLogGet.to_json())

# convert the object into a dict
monitor_status_log_get_dict = monitor_status_log_get_instance.to_dict()
# create an instance of MonitorStatusLogGet from a dict
monitor_status_log_get_from_dict = MonitorStatusLogGet.from_dict(monitor_status_log_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


