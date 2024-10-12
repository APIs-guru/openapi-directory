# CartInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Cart**](Cart.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_info200_response import CartInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartInfo200Response from a JSON string
cart_info200_response_instance = CartInfo200Response.from_json(json)
# print the JSON string representation of the object
print(CartInfo200Response.to_json())

# convert the object into a dict
cart_info200_response_dict = cart_info200_response_instance.to_dict()
# create an instance of CartInfo200Response from a dict
cart_info200_response_from_dict = CartInfo200Response.from_dict(cart_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


