# DndSetSnoozeSchema

Schema for successful response from dnd.setSnooze method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**snooze_enabled** | **bool** |  | 
**snooze_endtime** | **int** |  | 
**snooze_remaining** | **int** |  | 

## Example

```python
from openapi_client.models.dnd_set_snooze_schema import DndSetSnoozeSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndSetSnoozeSchema from a JSON string
dnd_set_snooze_schema_instance = DndSetSnoozeSchema.from_json(json)
# print the JSON string representation of the object
print(DndSetSnoozeSchema.to_json())

# convert the object into a dict
dnd_set_snooze_schema_dict = dnd_set_snooze_schema_instance.to_dict()
# create an instance of DndSetSnoozeSchema from a dict
dnd_set_snooze_schema_from_dict = DndSetSnoozeSchema.from_dict(dnd_set_snooze_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


