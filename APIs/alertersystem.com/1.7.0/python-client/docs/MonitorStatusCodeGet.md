# MonitorStatusCodeGet

The MonitorStatusCode resource is a set of codes that describes the possible statuses of a monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_description** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_status_code_get import MonitorStatusCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorStatusCodeGet from a JSON string
monitor_status_code_get_instance = MonitorStatusCodeGet.from_json(json)
# print the JSON string representation of the object
print(MonitorStatusCodeGet.to_json())

# convert the object into a dict
monitor_status_code_get_dict = monitor_status_code_get_instance.to_dict()
# create an instance of MonitorStatusCodeGet from a dict
monitor_status_code_get_from_dict = MonitorStatusCodeGet.from_dict(monitor_status_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


