# CartConfig200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartConfig200ResponseResult**](CartConfig200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_config200_response import CartConfig200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartConfig200Response from a JSON string
cart_config200_response_instance = CartConfig200Response.from_json(json)
# print the JSON string representation of the object
print(CartConfig200Response.to_json())

# convert the object into a dict
cart_config200_response_dict = cart_config200_response_instance.to_dict()
# create an instance of CartConfig200Response from a dict
cart_config200_response_from_dict = CartConfig200Response.from_dict(cart_config200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


