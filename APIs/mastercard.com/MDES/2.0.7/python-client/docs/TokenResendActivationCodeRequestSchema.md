# TokenResendActivationCodeRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_resend_activation_code_request** | [**TokenResendActivationCodeRequest**](TokenResendActivationCodeRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_resend_activation_code_request_schema import TokenResendActivationCodeRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResendActivationCodeRequestSchema from a JSON string
token_resend_activation_code_request_schema_instance = TokenResendActivationCodeRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenResendActivationCodeRequestSchema.to_json())

# convert the object into a dict
token_resend_activation_code_request_schema_dict = token_resend_activation_code_request_schema_instance.to_dict()
# create an instance of TokenResendActivationCodeRequestSchema from a dict
token_resend_activation_code_request_schema_from_dict = TokenResendActivationCodeRequestSchema.from_dict(token_resend_activation_code_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


