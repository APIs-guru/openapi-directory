# TokenResendActivationCodeResponseToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_unique_reference** | **str** | Unique reference to the Token. | [optional] 

## Example

```python
from openapi_client.models.token_resend_activation_code_response_token import TokenResendActivationCodeResponseToken

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResendActivationCodeResponseToken from a JSON string
token_resend_activation_code_response_token_instance = TokenResendActivationCodeResponseToken.from_json(json)
# print the JSON string representation of the object
print(TokenResendActivationCodeResponseToken.to_json())

# convert the object into a dict
token_resend_activation_code_response_token_dict = token_resend_activation_code_response_token_instance.to_dict()
# create an instance of TokenResendActivationCodeResponseToken from a dict
token_resend_activation_code_response_token_from_dict = TokenResendActivationCodeResponseToken.from_dict(token_resend_activation_code_response_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


