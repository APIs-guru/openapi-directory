# MonitorStatusCodeJsonldGet

The MonitorStatusCode resource is a set of codes that describes the possible statuses of a monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_description** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_status_code_jsonld_get import MonitorStatusCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorStatusCodeJsonldGet from a JSON string
monitor_status_code_jsonld_get_instance = MonitorStatusCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(MonitorStatusCodeJsonldGet.to_json())

# convert the object into a dict
monitor_status_code_jsonld_get_dict = monitor_status_code_jsonld_get_instance.to_dict()
# create an instance of MonitorStatusCodeJsonldGet from a dict
monitor_status_code_jsonld_get_from_dict = MonitorStatusCodeJsonldGet.from_dict(monitor_status_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


