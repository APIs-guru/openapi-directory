# PhoneNumbers

A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as \"+1 415 555 0132\", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_phones** | **List[str]** | Optional. Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number. | [optional] 
**primary_phone** | **str** | Required. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. | [optional] 

## Example

```python
from openapi_client.models.phone_numbers import PhoneNumbers

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumbers from a JSON string
phone_numbers_instance = PhoneNumbers.from_json(json)
# print the JSON string representation of the object
print(PhoneNumbers.to_json())

# convert the object into a dict
phone_numbers_dict = phone_numbers_instance.to_dict()
# create an instance of PhoneNumbers from a dict
phone_numbers_from_dict = PhoneNumbers.from_dict(phone_numbers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


