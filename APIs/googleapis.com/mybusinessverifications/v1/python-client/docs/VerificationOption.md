# VerificationOption

The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_data** | [**AddressVerificationData**](AddressVerificationData.md) |  | [optional] 
**announcement** | **str** | Set only if the method is VETTED_PARTNER. | [optional] 
**email_data** | [**EmailVerificationData**](EmailVerificationData.md) |  | [optional] 
**phone_number** | **str** | Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to. | [optional] 
**verification_method** | **str** | Method to verify the location. | [optional] 

## Example

```python
from openapi_client.models.verification_option import VerificationOption

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationOption from a JSON string
verification_option_instance = VerificationOption.from_json(json)
# print the JSON string representation of the object
print(VerificationOption.to_json())

# convert the object into a dict
verification_option_dict = verification_option_instance.to_dict()
# create an instance of VerificationOption from a dict
verification_option_from_dict = VerificationOption.from_dict(verification_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


