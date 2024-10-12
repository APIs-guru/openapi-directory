# IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest

Request for Identitytoolkit-VerifyPhoneNumber

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**id_token** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**session_info** | **str** | The session info previously returned by IdentityToolkit-SendVerificationCode. | [optional] 
**temporary_proof** | **str** |  | [optional] 
**verification_proof** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_verify_phone_number_request import IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest from a JSON string
identitytoolkit_relyingparty_verify_phone_number_request_instance = IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_verify_phone_number_request_dict = identitytoolkit_relyingparty_verify_phone_number_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest from a dict
identitytoolkit_relyingparty_verify_phone_number_request_from_dict = IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest.from_dict(identitytoolkit_relyingparty_verify_phone_number_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


