# SimpleAddressType

A simple representation of an address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city or town for the address. | [optional] 
**line1** | **str** | The street name and number of this address. | [optional] 
**line2** | **str** | The second line the address, if needed. | [optional] 
**line3** | **str** | The third line of the address, if needed. | [optional] 
**location_name** | **str** | The name of the location. | [optional] 
**state** | **str** | The US two letter state abbreviation of the address. | [optional] 
**zip** | **str** | The US Postal Zip Code of the address. | [optional] 

## Example

```python
from openapi_client.models.simple_address_type import SimpleAddressType

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleAddressType from a JSON string
simple_address_type_instance = SimpleAddressType.from_json(json)
# print the JSON string representation of the object
print(SimpleAddressType.to_json())

# convert the object into a dict
simple_address_type_dict = simple_address_type_instance.to_dict()
# create an instance of SimpleAddressType from a dict
simple_address_type_from_dict = SimpleAddressType.from_dict(simple_address_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


