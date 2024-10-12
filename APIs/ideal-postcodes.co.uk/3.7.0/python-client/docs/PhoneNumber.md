# PhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Full country name | 
**current_carrier** | [**Carrier**](Carrier.md) |  | 
**international_format** | **str** | Phone number formatted to international standard | 
**iso_country** | **str** | Country code in 3 letter ISO format | 
**iso_country_2** | **str** | Country code in 2 letter ISO format | 
**national_format** | **str** | Phone number formatted to local standard | 
**original_carrier** | [**Carrier**](Carrier.md) |  | 
**valid** | **bool** |  | 

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


