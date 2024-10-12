# CartScriptAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartScriptAdd200ResponseResult**](CartScriptAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_script_add200_response import CartScriptAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartScriptAdd200Response from a JSON string
cart_script_add200_response_instance = CartScriptAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CartScriptAdd200Response.to_json())

# convert the object into a dict
cart_script_add200_response_dict = cart_script_add200_response_instance.to_dict()
# create an instance of CartScriptAdd200Response from a dict
cart_script_add200_response_from_dict = CartScriptAdd200Response.from_dict(cart_script_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


