# TokenResendActivationCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_method_id** | **str** | Identifier of the activation method. | 
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**token_unique_reference** | **str** | TokenUniqueReference of the token. When present, the TUR field will be a 48 characters string. | 

## Example

```python
from openapi_client.models.token_resend_activation_code_request import TokenResendActivationCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResendActivationCodeRequest from a JSON string
token_resend_activation_code_request_instance = TokenResendActivationCodeRequest.from_json(json)
# print the JSON string representation of the object
print(TokenResendActivationCodeRequest.to_json())

# convert the object into a dict
token_resend_activation_code_request_dict = token_resend_activation_code_request_instance.to_dict()
# create an instance of TokenResendActivationCodeRequest from a dict
token_resend_activation_code_request_from_dict = TokenResendActivationCodeRequest.from_dict(token_resend_activation_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


