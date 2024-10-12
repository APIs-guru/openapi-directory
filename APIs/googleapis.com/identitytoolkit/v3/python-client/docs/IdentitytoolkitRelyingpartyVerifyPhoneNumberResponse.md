# IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse

Response for Identitytoolkit-VerifyPhoneNumber

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **str** |  | [optional] 
**id_token** | **str** |  | [optional] 
**is_new_user** | **bool** |  | [optional] 
**local_id** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 
**temporary_proof** | **str** |  | [optional] 
**temporary_proof_expires_in** | **str** |  | [optional] 
**verification_proof** | **str** |  | [optional] 
**verification_proof_expires_in** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_verify_phone_number_response import IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse from a JSON string
identitytoolkit_relyingparty_verify_phone_number_response_instance = IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_verify_phone_number_response_dict = identitytoolkit_relyingparty_verify_phone_number_response_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse from a dict
identitytoolkit_relyingparty_verify_phone_number_response_from_dict = IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse.from_dict(identitytoolkit_relyingparty_verify_phone_number_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


