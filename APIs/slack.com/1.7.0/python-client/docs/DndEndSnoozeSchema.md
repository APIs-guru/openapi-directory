# DndEndSnoozeSchema

Schema for successful response from dnd.endSnooze method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnd_enabled** | **bool** |  | 
**next_dnd_end_ts** | **int** |  | 
**next_dnd_start_ts** | **int** |  | 
**ok** | **bool** |  | 
**snooze_enabled** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_end_snooze_schema import DndEndSnoozeSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndEndSnoozeSchema from a JSON string
dnd_end_snooze_schema_instance = DndEndSnoozeSchema.from_json(json)
# print the JSON string representation of the object
print(DndEndSnoozeSchema.to_json())

# convert the object into a dict
dnd_end_snooze_schema_dict = dnd_end_snooze_schema_instance.to_dict()
# create an instance of DndEndSnoozeSchema from a dict
dnd_end_snooze_schema_from_dict = DndEndSnoozeSchema.from_dict(dnd_end_snooze_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


