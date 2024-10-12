# DndInfoSchema

Schema for successful response from dnd.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnd_enabled** | **bool** |  | 
**next_dnd_end_ts** | **int** |  | 
**next_dnd_start_ts** | **int** |  | 
**ok** | **bool** |  | 
**snooze_enabled** | **bool** |  | [optional] 
**snooze_endtime** | **int** |  | [optional] 
**snooze_remaining** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.dnd_info_schema import DndInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndInfoSchema from a JSON string
dnd_info_schema_instance = DndInfoSchema.from_json(json)
# print the JSON string representation of the object
print(DndInfoSchema.to_json())

# convert the object into a dict
dnd_info_schema_dict = dnd_info_schema_instance.to_dict()
# create an instance of DndInfoSchema from a dict
dnd_info_schema_from_dict = DndInfoSchema.from_dict(dnd_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


