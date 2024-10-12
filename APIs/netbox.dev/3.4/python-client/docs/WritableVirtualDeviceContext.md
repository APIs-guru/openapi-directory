# WritableVirtualDeviceContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** | Numeric identifier unique to the parent device | [optional] 
**interface_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**primary_ip** | **str** |  | [optional] [readonly] 
**primary_ip4** | **int** |  | [optional] 
**primary_ip6** | **int** |  | [optional] 
**status** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_virtual_device_context import WritableVirtualDeviceContext

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVirtualDeviceContext from a JSON string
writable_virtual_device_context_instance = WritableVirtualDeviceContext.from_json(json)
# print the JSON string representation of the object
print(WritableVirtualDeviceContext.to_json())

# convert the object into a dict
writable_virtual_device_context_dict = writable_virtual_device_context_instance.to_dict()
# create an instance of WritableVirtualDeviceContext from a dict
writable_virtual_device_context_from_dict = WritableVirtualDeviceContext.from_dict(writable_virtual_device_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


