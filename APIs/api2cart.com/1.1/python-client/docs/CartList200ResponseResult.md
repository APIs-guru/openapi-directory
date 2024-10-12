# CartList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_carts** | [**List[CartList200ResponseResultSupportedCartsInner]**](CartList200ResponseResultSupportedCartsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.cart_list200_response_result import CartList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of CartList200ResponseResult from a JSON string
cart_list200_response_result_instance = CartList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(CartList200ResponseResult.to_json())

# convert the object into a dict
cart_list200_response_result_dict = cart_list200_response_result_instance.to_dict()
# create an instance of CartList200ResponseResult from a dict
cart_list200_response_result_from_dict = CartList200ResponseResult.from_dict(cart_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


