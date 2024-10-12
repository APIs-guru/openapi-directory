# PhoneInput

Input for PHONE_CALL/SMS verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. | [optional] 

## Example

```python
from openapi_client.models.phone_input import PhoneInput

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneInput from a JSON string
phone_input_instance = PhoneInput.from_json(json)
# print the JSON string representation of the object
print(PhoneInput.to_json())

# convert the object into a dict
phone_input_dict = phone_input_instance.to_dict()
# create an instance of PhoneInput from a dict
phone_input_from_dict = PhoneInput.from_dict(phone_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


