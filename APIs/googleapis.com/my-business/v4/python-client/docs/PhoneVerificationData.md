# PhoneVerificationData

Display Data for verifications through phone, e.g. phone call, sms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Phone number that the PIN will be sent to. | [optional] 

## Example

```python
from openapi_client.models.phone_verification_data import PhoneVerificationData

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneVerificationData from a JSON string
phone_verification_data_instance = PhoneVerificationData.from_json(json)
# print the JSON string representation of the object
print(PhoneVerificationData.to_json())

# convert the object into a dict
phone_verification_data_dict = phone_verification_data_instance.to_dict()
# create an instance of PhoneVerificationData from a dict
phone_verification_data_from_dict = PhoneVerificationData.from_dict(phone_verification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


