# CartBridge200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartBridge200ResponseResult**](CartBridge200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_bridge200_response import CartBridge200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartBridge200Response from a JSON string
cart_bridge200_response_instance = CartBridge200Response.from_json(json)
# print the JSON string representation of the object
print(CartBridge200Response.to_json())

# convert the object into a dict
cart_bridge200_response_dict = cart_bridge200_response_instance.to_dict()
# create an instance of CartBridge200Response from a dict
cart_bridge200_response_from_dict = CartBridge200Response.from_dict(cart_bridge200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


