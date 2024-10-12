# ReactionsRemoveSchema

Schema for successful response from reactions.remove method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reactions_remove_schema import ReactionsRemoveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsRemoveSchema from a JSON string
reactions_remove_schema_instance = ReactionsRemoveSchema.from_json(json)
# print the JSON string representation of the object
print(ReactionsRemoveSchema.to_json())

# convert the object into a dict
reactions_remove_schema_dict = reactions_remove_schema_instance.to_dict()
# create an instance of ReactionsRemoveSchema from a dict
reactions_remove_schema_from_dict = ReactionsRemoveSchema.from_dict(reactions_remove_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


