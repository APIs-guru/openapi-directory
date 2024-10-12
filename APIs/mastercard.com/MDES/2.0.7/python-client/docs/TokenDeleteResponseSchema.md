# TokenDeleteResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_delete_response** | [**SimpleTokenResponse**](SimpleTokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_delete_response_schema import TokenDeleteResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenDeleteResponseSchema from a JSON string
token_delete_response_schema_instance = TokenDeleteResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenDeleteResponseSchema.to_json())

# convert the object into a dict
token_delete_response_schema_dict = token_delete_response_schema_instance.to_dict()
# create an instance of TokenDeleteResponseSchema from a dict
token_delete_response_schema_from_dict = TokenDeleteResponseSchema.from_dict(token_delete_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


