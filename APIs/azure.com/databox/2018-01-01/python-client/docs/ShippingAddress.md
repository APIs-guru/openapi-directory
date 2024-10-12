# ShippingAddress

Shipping address where customer wishes to receive the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **str** | Type of address. | [optional] 
**city** | **str** | Name of the City. | [optional] 
**company_name** | **str** | Name of the company. | [optional] 
**country** | **str** | Name of the Country. | 
**postal_code** | **str** | Postal code. | 
**state_or_province** | **str** | Name of the State or Province. | [optional] 
**street_address1** | **str** | Street Address line 1. | 
**street_address2** | **str** | Street Address line 2. | [optional] 
**street_address3** | **str** | Street Address line 3. | [optional] 
**zip_extended_code** | **str** | Extended Zip Code. | [optional] 

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


