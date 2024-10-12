# CartItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_item_number** | **str** |  | 
**change_date** | **datetime** |  | 
**create_date** | **datetime** |  | 
**discount_price** | **float** |  | 
**id** | **str** |  | 
**price** | **float** |  | 
**product** | [**Product**](Product.md) |  | 
**quantity** | **int** |  | 

## Example

```python
from openapi_client.models.cart_item import CartItem

# TODO update the JSON string below
json = "{}"
# create an instance of CartItem from a JSON string
cart_item_instance = CartItem.from_json(json)
# print the JSON string representation of the object
print(CartItem.to_json())

# convert the object into a dict
cart_item_dict = cart_item_instance.to_dict()
# create an instance of CartItem from a dict
cart_item_from_dict = CartItem.from_dict(cart_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


