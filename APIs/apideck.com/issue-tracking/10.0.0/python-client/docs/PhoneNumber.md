# PhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_code** | **str** | The area code of the phone number, e.g. 323 | [optional] 
**country_code** | **str** | The country code of the phone number, e.g. +1 | [optional] 
**extension** | **str** | The extension of the phone number | [optional] 
**id** | **str** | Unique identifier of the phone number | [optional] 
**number** | **str** | The phone number | 
**type** | **str** | The type of phone number | [optional] 

## Example

```python
from openapi_client.models.phone_number import PhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumber from a JSON string
phone_number_instance = PhoneNumber.from_json(json)
# print the JSON string representation of the object
print(PhoneNumber.to_json())

# convert the object into a dict
phone_number_dict = phone_number_instance.to_dict()
# create an instance of PhoneNumber from a dict
phone_number_from_dict = PhoneNumber.from_dict(phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


