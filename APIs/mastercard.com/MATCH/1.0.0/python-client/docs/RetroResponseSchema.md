# RetroResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retro_response** | [**RetroResponse**](RetroResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.retro_response_schema import RetroResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RetroResponseSchema from a JSON string
retro_response_schema_instance = RetroResponseSchema.from_json(json)
# print the JSON string representation of the object
print(RetroResponseSchema.to_json())

# convert the object into a dict
retro_response_schema_dict = retro_response_schema_instance.to_dict()
# create an instance of RetroResponseSchema from a dict
retro_response_schema_from_dict = RetroResponseSchema.from_dict(retro_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


