# DndEndDndErrorSchema

Schema for error response from dnd.endDnd method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_end_dnd_error_schema import DndEndDndErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndEndDndErrorSchema from a JSON string
dnd_end_dnd_error_schema_instance = DndEndDndErrorSchema.from_json(json)
# print the JSON string representation of the object
print(DndEndDndErrorSchema.to_json())

# convert the object into a dict
dnd_end_dnd_error_schema_dict = dnd_end_dnd_error_schema_instance.to_dict()
# create an instance of DndEndDndErrorSchema from a dict
dnd_end_dnd_error_schema_from_dict = DndEndDndErrorSchema.from_dict(dnd_end_dnd_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


