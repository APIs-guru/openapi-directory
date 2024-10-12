# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The name of the city for a merchant location. | 
**country** | **str** | The three digit country code of the principal owner. Valid values are Three digit alpha country codes as defined in ISO 3166-1. | 
**country_subdivision** | **str** | The abbreviated state or province code for a merchant location (only supported for US and Canada merchants). | 
**line1** | **str** | Line 1 of the street address for the merchant location. Usually includes street number and name. | 
**line2** | **str** | Line 2 of the street address,usually an apartment number or suite number. | [optional] 
**postal_code** | **str** | The postal code for a merchant location (only supported for US and Canada merchants). | 
**province** | **str** | The name of the province for the location. | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


