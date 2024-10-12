# MonitorTypeCodeJsonldGet

The MonitorTypeCode resource is a set of codes that describes the different types of monitors that are available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_description** | **str** |  | [optional] [readonly] 
**code_description_expanded** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_type_code_jsonld_get import MonitorTypeCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorTypeCodeJsonldGet from a JSON string
monitor_type_code_jsonld_get_instance = MonitorTypeCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(MonitorTypeCodeJsonldGet.to_json())

# convert the object into a dict
monitor_type_code_jsonld_get_dict = monitor_type_code_jsonld_get_instance.to_dict()
# create an instance of MonitorTypeCodeJsonldGet from a dict
monitor_type_code_jsonld_get_from_dict = MonitorTypeCodeJsonldGet.from_dict(monitor_type_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


