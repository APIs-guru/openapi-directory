# IdentitytoolkitRelyingpartySendVerificationCodeRequest

Request for Identitytoolkit-SendVerificationCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ios_receipt** | **str** | Receipt of successful app token validation with APNS. | [optional] 
**ios_secret** | **str** | Secret delivered to iOS app via APNS. | [optional] 
**phone_number** | **str** | The phone number to send the verification code to in E.164 format. | [optional] 
**recaptcha_token** | **str** | Recaptcha solution. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_send_verification_code_request import IdentitytoolkitRelyingpartySendVerificationCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartySendVerificationCodeRequest from a JSON string
identitytoolkit_relyingparty_send_verification_code_request_instance = IdentitytoolkitRelyingpartySendVerificationCodeRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartySendVerificationCodeRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_send_verification_code_request_dict = identitytoolkit_relyingparty_send_verification_code_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartySendVerificationCodeRequest from a dict
identitytoolkit_relyingparty_send_verification_code_request_from_dict = IdentitytoolkitRelyingpartySendVerificationCodeRequest.from_dict(identitytoolkit_relyingparty_send_verification_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


