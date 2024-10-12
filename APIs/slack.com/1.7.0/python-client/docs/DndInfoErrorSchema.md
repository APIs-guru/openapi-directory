# DndInfoErrorSchema

Schema for error response from dnd.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_info_error_schema import DndInfoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndInfoErrorSchema from a JSON string
dnd_info_error_schema_instance = DndInfoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(DndInfoErrorSchema.to_json())

# convert the object into a dict
dnd_info_error_schema_dict = dnd_info_error_schema_instance.to_dict()
# create an instance of DndInfoErrorSchema from a dict
dnd_info_error_schema_from_dict = DndInfoErrorSchema.from_dict(dnd_info_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


