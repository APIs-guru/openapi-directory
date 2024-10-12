# VerifyPhoneNumberResponse

Response message for the VerifyPhoneNumber method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified_phone_number** | **str** | Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number. | [optional] 

## Example

```python
from openapi_client.models.verify_phone_number_response import VerifyPhoneNumberResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyPhoneNumberResponse from a JSON string
verify_phone_number_response_instance = VerifyPhoneNumberResponse.from_json(json)
# print the JSON string representation of the object
print(VerifyPhoneNumberResponse.to_json())

# convert the object into a dict
verify_phone_number_response_dict = verify_phone_number_response_instance.to_dict()
# create an instance of VerifyPhoneNumberResponse from a dict
verify_phone_number_response_from_dict = VerifyPhoneNumberResponse.from_dict(verify_phone_number_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


