# TokenSuspendResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_suspend_response** | [**SimpleTokenResponse**](SimpleTokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_suspend_response_schema import TokenSuspendResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenSuspendResponseSchema from a JSON string
token_suspend_response_schema_instance = TokenSuspendResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenSuspendResponseSchema.to_json())

# convert the object into a dict
token_suspend_response_schema_dict = token_suspend_response_schema_instance.to_dict()
# create an instance of TokenSuspendResponseSchema from a dict
token_suspend_response_schema_from_dict = TokenSuspendResponseSchema.from_dict(token_suspend_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


