# CartItem

The type that defines the fields for the individual items in a cart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_item_id** | **str** | The identifier for the item being added to the cart. This is generated when the item is added to the cart. | [optional] 
**cart_item_subtotal** | [**Amount**](Amount.md) |  | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**item_id** | **str** | The RESTful identifier of the item. This identifier is generated when the item was listed. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 v1|162846450672|461882996982 | [optional] 
**item_web_url** | **str** | The URL of the eBay view item page for the item. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | **int** | The number of this item the buyer wants to purchase. | [optional] 
**title** | **str** | The title of the item. This can be written by the seller or come from the eBay product catalog. | [optional] 

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


