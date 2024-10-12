# TokenUnsuspendResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_unsuspend_response** | [**SimpleTokenResponse**](SimpleTokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_unsuspend_response_schema import TokenUnsuspendResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUnsuspendResponseSchema from a JSON string
token_unsuspend_response_schema_instance = TokenUnsuspendResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenUnsuspendResponseSchema.to_json())

# convert the object into a dict
token_unsuspend_response_schema_dict = token_unsuspend_response_schema_instance.to_dict()
# create an instance of TokenUnsuspendResponseSchema from a dict
token_unsuspend_response_schema_from_dict = TokenUnsuspendResponseSchema.from_dict(token_unsuspend_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


