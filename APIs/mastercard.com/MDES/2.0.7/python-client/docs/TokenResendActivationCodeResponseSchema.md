# TokenResendActivationCodeResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_resend_activation_code_response** | [**TokenResendActivationCodeResponse**](TokenResendActivationCodeResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_resend_activation_code_response_schema import TokenResendActivationCodeResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResendActivationCodeResponseSchema from a JSON string
token_resend_activation_code_response_schema_instance = TokenResendActivationCodeResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenResendActivationCodeResponseSchema.to_json())

# convert the object into a dict
token_resend_activation_code_response_schema_dict = token_resend_activation_code_response_schema_instance.to_dict()
# create an instance of TokenResendActivationCodeResponseSchema from a dict
token_resend_activation_code_response_schema_from_dict = TokenResendActivationCodeResponseSchema.from_dict(token_resend_activation_code_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


