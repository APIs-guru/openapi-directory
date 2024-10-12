# ReactionsListErrorSchema

Schema for error response from reactions.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.reactions_list_error_schema import ReactionsListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsListErrorSchema from a JSON string
reactions_list_error_schema_instance = ReactionsListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ReactionsListErrorSchema.to_json())

# convert the object into a dict
reactions_list_error_schema_dict = reactions_list_error_schema_instance.to_dict()
# create an instance of ReactionsListErrorSchema from a dict
reactions_list_error_schema_from_dict = ReactionsListErrorSchema.from_dict(reactions_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


