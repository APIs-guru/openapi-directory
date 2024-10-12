# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The name of the city for an ATM location. | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**country_subdivision** | [**CountrySubdivision**](CountrySubdivision.md) |  | [optional] 
**line1** | **str** | Line 1 of the street address for the merchant location.  Usually includes the street number and name. | [optional] 
**line2** | **str** | Line 2 of the street address usually an apartment number or suite number. | [optional] 
**postal_code** | **str** | The zip code or postal code for an ATM location. | [optional] 

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


