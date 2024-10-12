# VirtualDeviceContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** | Numeric identifier unique to the parent device | [optional] 
**interface_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**primary_ip** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip4** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip6** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**status** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_device_context import VirtualDeviceContext

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualDeviceContext from a JSON string
virtual_device_context_instance = VirtualDeviceContext.from_json(json)
# print the JSON string representation of the object
print(VirtualDeviceContext.to_json())

# convert the object into a dict
virtual_device_context_dict = virtual_device_context_instance.to_dict()
# create an instance of VirtualDeviceContext from a dict
virtual_device_context_from_dict = VirtualDeviceContext.from_dict(virtual_device_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


