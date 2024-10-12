# AddCartItemInput

The type that defines the fields for the <b>addItems</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | The eBay RESTful identifier of the item you want added to the cart. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. Maximum number of items in a cart: 100 | [optional] 
**quantity** | **int** | The number of this item the buyer wants to purchase. If this value is greater than the number available, the service will change this value to the number available. If this happens, a warning is returned. Maximum: number available | [optional] 

## Example

```python
from openapi_client.models.add_cart_item_input import AddCartItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of AddCartItemInput from a JSON string
add_cart_item_input_instance = AddCartItemInput.from_json(json)
# print the JSON string representation of the object
print(AddCartItemInput.to_json())

# convert the object into a dict
add_cart_item_input_dict = add_cart_item_input_instance.to_dict()
# create an instance of AddCartItemInput from a dict
add_cart_item_input_from_dict = AddCartItemInput.from_dict(add_cart_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


