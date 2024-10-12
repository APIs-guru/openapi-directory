# CartPluginList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_plugins** | **int** |  | [optional] 
**plugins** | [**List[PluginList]**](PluginList.md) |  | [optional] 

## Example

```python
from openapi_client.models.cart_plugin_list200_response_result import CartPluginList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of CartPluginList200ResponseResult from a JSON string
cart_plugin_list200_response_result_instance = CartPluginList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(CartPluginList200ResponseResult.to_json())

# convert the object into a dict
cart_plugin_list200_response_result_dict = cart_plugin_list200_response_result_instance.to_dict()
# create an instance of CartPluginList200ResponseResult from a dict
cart_plugin_list200_response_result_from_dict = CartPluginList200ResponseResult.from_dict(cart_plugin_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


