# InvalidPhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Full country name | 
**current_carrier** | **str** | Representation of current phone carrier information like network code, name, country, network type | [optional] 
**international_format** | **str** | Phone number formatted to international standard | 
**iso_country** | **str** | Country code in 3 letter ISO format | 
**iso_country_2** | **str** | Country code in 2 letter ISO format | 
**national_format** | **str** | Phone number formatted to local standard | 
**original_carrier** | **str** | Representation of original phone carrier information like network code, name, country, network type | [optional] 
**valid** | **bool** |  | 

## Example

```python
from openapi_client.models.invalid_phone_number import InvalidPhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidPhoneNumber from a JSON string
invalid_phone_number_instance = InvalidPhoneNumber.from_json(json)
# print the JSON string representation of the object
print(InvalidPhoneNumber.to_json())

# convert the object into a dict
invalid_phone_number_dict = invalid_phone_number_instance.to_dict()
# create an instance of InvalidPhoneNumber from a dict
invalid_phone_number_from_dict = InvalidPhoneNumber.from_dict(invalid_phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


