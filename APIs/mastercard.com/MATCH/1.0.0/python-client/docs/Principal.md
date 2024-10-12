# Principal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**alt_phone_number** | **str** | The Business or Merchant&#39;s alternate phone number, including the area code. Within the USA, phone numbers have a length of 10, and for out outside the US, a max length of 25. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The number must be digits only, with no format characters such as parenthesis or dashes. | [optional] 
**drivers_license** | [**DriversLicense**](DriversLicense.md) |  | [optional] 
**first_name** | **str** | The first name of the principal owner of the business. | 
**last_name** | **str** | The last name of the principal owner of the business. | 
**middle_initial** | **str** | THe middle initial of the name of the principal owner of the business. | [optional] 
**national_id** | **str** | The Social Security number of a principal owner. If the principal owner is not from the U.S. Region, then use their national ID card number. | [optional] 
**phone_number** | **str** | The Business or Merchant&#39;s phone number, including the area code. Within the USA, phone numbers have a length of 10, and for outside the US, it can be any length with a maximum of 12 digits. Within the U.S. phone numbers can not start with 0 or 1. If the number is outside the U.S. region; do not include the country code. The phone number must be digits only, with no format characters such as parenthesis or dashes. | [optional] 
**search_criteria** | [**SearchCriteria**](SearchCriteria.md) |  | [optional] 

## Example

```python
from openapi_client.models.principal import Principal

# TODO update the JSON string below
json = "{}"
# create an instance of Principal from a JSON string
principal_instance = Principal.from_json(json)
# print the JSON string representation of the object
print(Principal.to_json())

# convert the object into a dict
principal_dict = principal_instance.to_dict()
# create an instance of Principal from a dict
principal_from_dict = Principal.from_dict(principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


