# NestedVirtualDeviceContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** | Numeric identifier unique to the parent device | [optional] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_virtual_device_context import NestedVirtualDeviceContext

# TODO update the JSON string below
json = "{}"
# create an instance of NestedVirtualDeviceContext from a JSON string
nested_virtual_device_context_instance = NestedVirtualDeviceContext.from_json(json)
# print the JSON string representation of the object
print(NestedVirtualDeviceContext.to_json())

# convert the object into a dict
nested_virtual_device_context_dict = nested_virtual_device_context_instance.to_dict()
# create an instance of NestedVirtualDeviceContext from a dict
nested_virtual_device_context_from_dict = NestedVirtualDeviceContext.from_dict(nested_virtual_device_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


