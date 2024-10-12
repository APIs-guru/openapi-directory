# Cart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**db_prefix** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**shipping_zones** | [**List[CartShippingZone]**](CartShippingZone.md) |  | [optional] 
**stores_info** | [**List[CartStoreInfo]**](CartStoreInfo.md) |  | [optional] 
**url** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**warehouses** | [**List[CartWarehouse]**](CartWarehouse.md) |  | [optional] 

## Example

```python
from openapi_client.models.cart import Cart

# TODO update the JSON string below
json = "{}"
# create an instance of Cart from a JSON string
cart_instance = Cart.from_json(json)
# print the JSON string representation of the object
print(Cart.to_json())

# convert the object into a dict
cart_dict = cart_instance.to_dict()
# create an instance of Cart from a dict
cart_from_dict = Cart.from_dict(cart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


