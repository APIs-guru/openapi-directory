# ReactionsAddErrorSchema

Schema for error response from reactions.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reactions_add_error_schema import ReactionsAddErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsAddErrorSchema from a JSON string
reactions_add_error_schema_instance = ReactionsAddErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ReactionsAddErrorSchema.to_json())

# convert the object into a dict
reactions_add_error_schema_dict = reactions_add_error_schema_instance.to_dict()
# create an instance of ReactionsAddErrorSchema from a dict
reactions_add_error_schema_from_dict = ReactionsAddErrorSchema.from_dict(reactions_add_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


