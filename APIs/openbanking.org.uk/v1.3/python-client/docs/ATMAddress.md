# ATMAddress

Postal Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_number_or_name** | **str** | Number or Name that identifies the position of a building on a street | [optional] 
**country** | **str** | Nation with its own government | 
**country_sub_division** | **str** | Identifies a subdivision of a country such as state, region, county | [optional] 
**optional_address_field** | **str** | Directions for customers | [optional] 
**post_code** | **str** | Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail | 
**street_name** | **str** | Name of a street or thoroughfare | 
**town_name** | **str** | Name of a built-up area, with defined boundaries, and a local government | [optional] 

## Example

```python
from openapi_client.models.atm_address import ATMAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ATMAddress from a JSON string
atm_address_instance = ATMAddress.from_json(json)
# print the JSON string representation of the object
print(ATMAddress.to_json())

# convert the object into a dict
atm_address_dict = atm_address_instance.to_dict()
# create an instance of ATMAddress from a dict
atm_address_from_dict = ATMAddress.from_dict(atm_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


