# CartShippingZone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**country_iso2_codes** | **List[str]** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_shipping_zone import CartShippingZone

# TODO update the JSON string below
json = "{}"
# create an instance of CartShippingZone from a JSON string
cart_shipping_zone_instance = CartShippingZone.from_json(json)
# print the JSON string representation of the object
print(CartShippingZone.to_json())

# convert the object into a dict
cart_shipping_zone_dict = cart_shipping_zone_instance.to_dict()
# create an instance of CartShippingZone from a dict
cart_shipping_zone_from_dict = CartShippingZone.from_dict(cart_shipping_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


