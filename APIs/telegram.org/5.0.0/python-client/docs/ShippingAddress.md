# ShippingAddress

This object represents a shipping address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City | 
**country_code** | **str** | ISO 3166-1 alpha-2 country code | 
**post_code** | **str** | Address post code | 
**state** | **str** | State, if applicable | 
**street_line1** | **str** | First line for the address | 
**street_line2** | **str** | Second line for the address | 

## Example

```python
from openapi_client.models.shipping_address import ShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingAddress from a JSON string
shipping_address_instance = ShippingAddress.from_json(json)
# print the JSON string representation of the object
print(ShippingAddress.to_json())

# convert the object into a dict
shipping_address_dict = shipping_address_instance.to_dict()
# create an instance of ShippingAddress from a dict
shipping_address_from_dict = ShippingAddress.from_dict(shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


