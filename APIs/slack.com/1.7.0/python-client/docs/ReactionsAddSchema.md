# ReactionsAddSchema

Schema for successful response from reactions.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reactions_add_schema import ReactionsAddSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsAddSchema from a JSON string
reactions_add_schema_instance = ReactionsAddSchema.from_json(json)
# print the JSON string representation of the object
print(ReactionsAddSchema.to_json())

# convert the object into a dict
reactions_add_schema_dict = reactions_add_schema_instance.to_dict()
# create an instance of ReactionsAddSchema from a dict
reactions_add_schema_from_dict = ReactionsAddSchema.from_dict(reactions_add_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


