# Cart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_id** | **str** |  | [optional] 
**change_date** | **datetime** |  | 
**cookies** | **object** |  | [optional] 
**create_date** | **datetime** |  | 
**currency** | **str** |  | 
**customer** | [**Customer**](Customer.md) |  | 
**id** | **str** |  | 
**items** | [**List[CartItem]**](CartItem.md) |  | 
**previous_items** | [**List[CartItem]**](CartItem.md) |  | [optional] 
**subtotal** | **float** |  | 
**total** | **float** |  | 
**total_discounts** | **float** |  | 
**total_payment_cost** | **float** |  | 
**total_shipping** | **float** |  | 
**total_tax** | **float** |  | 
**visit** | [**Visit**](Visit.md) |  | [optional] 

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


