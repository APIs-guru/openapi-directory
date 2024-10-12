# PhoneNumberResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Full country name | 
**current_carrier** | **str** | Representation of current phone carrier information like network code, name, country, network type | 
**international_format** | **str** | Phone number formatted to international standard | 
**iso_country** | **str** | Country code in 3 letter ISO format | 
**iso_country_2** | **str** | Country code in 2 letter ISO format | 
**national_format** | **str** | Phone number formatted to local standard | 
**original_carrier** | **str** | Representation of original phone carrier information like network code, name, country, network type | 
**valid** | **bool** |  | 

## Example

```python
from openapi_client.models.phone_number_response_result import PhoneNumberResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberResponseResult from a JSON string
phone_number_response_result_instance = PhoneNumberResponseResult.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberResponseResult.to_json())

# convert the object into a dict
phone_number_response_result_dict = phone_number_response_result_instance.to_dict()
# create an instance of PhoneNumberResponseResult from a dict
phone_number_response_result_from_dict = PhoneNumberResponseResult.from_dict(phone_number_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


