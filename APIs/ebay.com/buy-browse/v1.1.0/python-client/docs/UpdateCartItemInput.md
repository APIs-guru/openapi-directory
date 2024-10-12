# UpdateCartItemInput

The type that defines the fields for the <b>updateQuantity</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_item_id** | **str** | The identifier of the item in the cart to be updated. This ID is generated when the item was added to the cart. | [optional] 
**quantity** | **int** | The new quantity for the item that is being updated. | [optional] 

## Example

```python
from openapi_client.models.update_cart_item_input import UpdateCartItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCartItemInput from a JSON string
update_cart_item_input_instance = UpdateCartItemInput.from_json(json)
# print the JSON string representation of the object
print(UpdateCartItemInput.to_json())

# convert the object into a dict
update_cart_item_input_dict = update_cart_item_input_instance.to_dict()
# create an instance of UpdateCartItemInput from a dict
update_cart_item_input_from_dict = UpdateCartItemInput.from_dict(update_cart_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


