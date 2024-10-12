# CartChannel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**is_enabled** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**platform** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_channel import CartChannel

# TODO update the JSON string below
json = "{}"
# create an instance of CartChannel from a JSON string
cart_channel_instance = CartChannel.from_json(json)
# print the JSON string representation of the object
print(CartChannel.to_json())

# convert the object into a dict
cart_channel_dict = cart_channel_instance.to_dict()
# create an instance of CartChannel from a dict
cart_channel_from_dict = CartChannel.from_dict(cart_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


