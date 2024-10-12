# VerifyPhoneNumberRequest

Request message for the VerifyPhoneNumber method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_verification_method** | **str** | Verification method used to receive verification code. | [optional] 
**verification_code** | **str** | The verification code that was sent to the phone number for validation. | [optional] 
**verification_id** | **str** | The verification ID returned by &#x60;requestphoneverification&#x60;. | [optional] 

## Example

```python
from openapi_client.models.verify_phone_number_request import VerifyPhoneNumberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyPhoneNumberRequest from a JSON string
verify_phone_number_request_instance = VerifyPhoneNumberRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyPhoneNumberRequest.to_json())

# convert the object into a dict
verify_phone_number_request_dict = verify_phone_number_request_instance.to_dict()
# create an instance of VerifyPhoneNumberRequest from a dict
verify_phone_number_request_from_dict = VerifyPhoneNumberRequest.from_dict(verify_phone_number_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


