# RemoveCartItemInput

The type that defines the fields for the <b>removeItem</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_item_id** | **str** | The identifier of the item in the cart to be removed. This ID is generated when the item was added to the cart. | [optional] 

## Example

```python
from openapi_client.models.remove_cart_item_input import RemoveCartItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveCartItemInput from a JSON string
remove_cart_item_input_instance = RemoveCartItemInput.from_json(json)
# print the JSON string representation of the object
print(RemoveCartItemInput.to_json())

# convert the object into a dict
remove_cart_item_input_dict = remove_cart_item_input_instance.to_dict()
# create an instance of RemoveCartItemInput from a dict
remove_cart_item_input_from_dict = RemoveCartItemInput.from_dict(remove_cart_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


