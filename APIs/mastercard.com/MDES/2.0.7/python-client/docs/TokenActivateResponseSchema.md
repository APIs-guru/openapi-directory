# TokenActivateResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_activate_response** | [**SimpleTokenResponse**](SimpleTokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_activate_response_schema import TokenActivateResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenActivateResponseSchema from a JSON string
token_activate_response_schema_instance = TokenActivateResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenActivateResponseSchema.to_json())

# convert the object into a dict
token_activate_response_schema_dict = token_activate_response_schema_instance.to_dict()
# create an instance of TokenActivateResponseSchema from a dict
token_activate_response_schema_from_dict = TokenActivateResponseSchema.from_dict(token_activate_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


