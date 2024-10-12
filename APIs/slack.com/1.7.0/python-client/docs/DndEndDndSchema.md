# DndEndDndSchema

Schema for successful response from dnd.endDnd method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dnd_end_dnd_schema import DndEndDndSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DndEndDndSchema from a JSON string
dnd_end_dnd_schema_instance = DndEndDndSchema.from_json(json)
# print the JSON string representation of the object
print(DndEndDndSchema.to_json())

# convert the object into a dict
dnd_end_dnd_schema_dict = dnd_end_dnd_schema_instance.to_dict()
# create an instance of DndEndDndSchema from a dict
dnd_end_dnd_schema_from_dict = DndEndDndSchema.from_dict(dnd_end_dnd_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


