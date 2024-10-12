# CartList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartList200ResponseResult**](CartList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_list200_response import CartList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartList200Response from a JSON string
cart_list200_response_instance = CartList200Response.from_json(json)
# print the JSON string representation of the object
print(CartList200Response.to_json())

# convert the object into a dict
cart_list200_response_dict = cart_list200_response_instance.to_dict()
# create an instance of CartList200Response from a dict
cart_list200_response_from_dict = CartList200Response.from_dict(cart_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


