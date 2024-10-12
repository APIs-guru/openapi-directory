# FirstLastNamePhoneCodedOut

Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** |  | [optional] 
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**international_phone_number_verified** | **str** | The normalized phone number, verified using libphonenumber. | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**origin_country_iso2** | **str** | The likely country of origin of the name. | [optional] 
**origin_country_iso2_alt** | **str** | The best alternative country of origin of the name. | [optional] 
**phone_country_code** | **int** | The phone country code of the phone number, verified using libphonenumber. | [optional] 
**phone_country_code_alt** | **int** | The best alternative phone country code of the phone number. | [optional] 
**phone_country_iso2** | **str** | The likely country of the phone number. | [optional] 
**phone_country_iso2_alt** | **str** | The best alternative country of the phone number. | [optional] 
**phone_country_iso2_verified** | **str** | The phone ISO2 country code, verified using libphonenumber. | [optional] 
**phone_number** | **str** | The input phone number. | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 
**verified** | **bool** | Indicates if the phone number could be positively verified using libphonenumber. | [optional] 

## Example

```python
from openapi_client.models.first_last_name_phone_coded_out import FirstLastNamePhoneCodedOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNamePhoneCodedOut from a JSON string
first_last_name_phone_coded_out_instance = FirstLastNamePhoneCodedOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNamePhoneCodedOut.to_json())

# convert the object into a dict
first_last_name_phone_coded_out_dict = first_last_name_phone_coded_out_instance.to_dict()
# create an instance of FirstLastNamePhoneCodedOut from a dict
first_last_name_phone_coded_out_from_dict = FirstLastNamePhoneCodedOut.from_dict(first_last_name_phone_coded_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


