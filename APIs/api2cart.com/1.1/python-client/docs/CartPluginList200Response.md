# CartPluginList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartPluginList200ResponseResult**](CartPluginList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_plugin_list200_response import CartPluginList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartPluginList200Response from a JSON string
cart_plugin_list200_response_instance = CartPluginList200Response.from_json(json)
# print the JSON string representation of the object
print(CartPluginList200Response.to_json())

# convert the object into a dict
cart_plugin_list200_response_dict = cart_plugin_list200_response_instance.to_dict()
# create an instance of CartPluginList200Response from a dict
cart_plugin_list200_response_from_dict = CartPluginList200Response.from_dict(cart_plugin_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


