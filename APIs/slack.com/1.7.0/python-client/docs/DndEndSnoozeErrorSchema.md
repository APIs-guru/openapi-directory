# DndEndSnoozeErrorSchema

Schema for error response from dnd.endSnooze method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_end_snooze_error_schema import DndEndSnoozeErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndEndSnoozeErrorSchema from a JSON string
dnd_end_snooze_error_schema_instance = DndEndSnoozeErrorSchema.from_json(json)
# print the JSON string representation of the object
print(DndEndSnoozeErrorSchema.to_json())

# convert the object into a dict
dnd_end_snooze_error_schema_dict = dnd_end_snooze_error_schema_instance.to_dict()
# create an instance of DndEndSnoozeErrorSchema from a dict
dnd_end_snooze_error_schema_from_dict = DndEndSnoozeErrorSchema.from_dict(dnd_end_snooze_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


