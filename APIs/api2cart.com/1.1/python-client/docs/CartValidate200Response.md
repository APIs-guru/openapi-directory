# CartValidate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartValidate200ResponseResult**](CartValidate200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_validate200_response import CartValidate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartValidate200Response from a JSON string
cart_validate200_response_instance = CartValidate200Response.from_json(json)
# print the JSON string representation of the object
print(CartValidate200Response.to_json())

# convert the object into a dict
cart_validate200_response_dict = cart_validate200_response_instance.to_dict()
# create an instance of CartValidate200Response from a dict
cart_validate200_response_from_dict = CartValidate200Response.from_dict(cart_validate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


