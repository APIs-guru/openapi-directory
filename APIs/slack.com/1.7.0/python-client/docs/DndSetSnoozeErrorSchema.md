# DndSetSnoozeErrorSchema

Schema for error response from dnd.setSnooze method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_set_snooze_error_schema import DndSetSnoozeErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndSetSnoozeErrorSchema from a JSON string
dnd_set_snooze_error_schema_instance = DndSetSnoozeErrorSchema.from_json(json)
# print the JSON string representation of the object
print(DndSetSnoozeErrorSchema.to_json())

# convert the object into a dict
dnd_set_snooze_error_schema_dict = dnd_set_snooze_error_schema_instance.to_dict()
# create an instance of DndSetSnoozeErrorSchema from a dict
dnd_set_snooze_error_schema_from_dict = DndSetSnoozeErrorSchema.from_dict(dnd_set_snooze_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


