# TokenResendActivationCodeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**TokenResendActivationCodeResponseToken**](TokenResendActivationCodeResponseToken.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_resend_activation_code_response import TokenResendActivationCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResendActivationCodeResponse from a JSON string
token_resend_activation_code_response_instance = TokenResendActivationCodeResponse.from_json(json)
# print the JSON string representation of the object
print(TokenResendActivationCodeResponse.to_json())

# convert the object into a dict
token_resend_activation_code_response_dict = token_resend_activation_code_response_instance.to_dict()
# create an instance of TokenResendActivationCodeResponse from a dict
token_resend_activation_code_response_from_dict = TokenResendActivationCodeResponse.from_dict(token_resend_activation_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


