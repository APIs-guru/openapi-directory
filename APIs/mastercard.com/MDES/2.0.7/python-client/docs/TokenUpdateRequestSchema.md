# TokenUpdateRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_update_request** | [**TokenUpdateRequest**](TokenUpdateRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_update_request_schema import TokenUpdateRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateRequestSchema from a JSON string
token_update_request_schema_instance = TokenUpdateRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateRequestSchema.to_json())

# convert the object into a dict
token_update_request_schema_dict = token_update_request_schema_instance.to_dict()
# create an instance of TokenUpdateRequestSchema from a dict
token_update_request_schema_from_dict = TokenUpdateRequestSchema.from_dict(token_update_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


