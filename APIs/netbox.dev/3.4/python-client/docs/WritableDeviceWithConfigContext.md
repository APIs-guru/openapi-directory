# WritableDeviceWithConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow** | **str** |  | [optional] 
**asset_tag** | **str** | A unique tag used to identify this device | [optional] 
**cluster** | **int** |  | [optional] 
**comments** | **str** |  | [optional] 
**config_context** | **object** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_role** | **int** |  | 
**device_type** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**face** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**local_context_data** | **object** |  | [optional] 
**location** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**parent_device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**platform** | **int** |  | [optional] 
**position** | **float** |  | [optional] 
**primary_ip** | **str** |  | [optional] [readonly] 
**primary_ip4** | **int** |  | [optional] 
**primary_ip6** | **int** |  | [optional] 
**rack** | **int** |  | [optional] 
**serial** | **str** |  | [optional] 
**site** | **int** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vc_position** | **int** |  | [optional] 
**vc_priority** | **int** |  | [optional] 
**virtual_chassis** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_device_with_config_context import WritableDeviceWithConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of WritableDeviceWithConfigContext from a JSON string
writable_device_with_config_context_instance = WritableDeviceWithConfigContext.from_json(json)
# print the JSON string representation of the object
print(WritableDeviceWithConfigContext.to_json())

# convert the object into a dict
writable_device_with_config_context_dict = writable_device_with_config_context_instance.to_dict()
# create an instance of WritableDeviceWithConfigContext from a dict
writable_device_with_config_context_from_dict = WritableDeviceWithConfigContext.from_dict(writable_device_with_config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


