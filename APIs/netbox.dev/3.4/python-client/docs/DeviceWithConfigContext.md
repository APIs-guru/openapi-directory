# DeviceWithConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow** | [**Airflow**](Airflow.md) |  | [optional] 
**asset_tag** | **str** | A unique tag used to identify this device | [optional] 
**cluster** | [**NestedCluster**](NestedCluster.md) |  | [optional] 
**comments** | **str** |  | [optional] 
**config_context** | **object** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_role** | [**NestedDeviceRole**](NestedDeviceRole.md) |  | 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**face** | [**Face**](Face.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**local_context_data** | **object** |  | [optional] 
**location** | [**NestedLocation**](NestedLocation.md) |  | [optional] 
**name** | **str** |  | [optional] 
**parent_device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**platform** | [**NestedPlatform**](NestedPlatform.md) |  | [optional] 
**position** | **float** |  | [optional] 
**primary_ip** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip4** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip6** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**rack** | [**NestedRack**](NestedRack.md) |  | [optional] 
**serial** | **str** |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | 
**status** | [**Status3**](Status3.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vc_position** | **int** |  | [optional] 
**vc_priority** | **int** |  | [optional] 
**virtual_chassis** | [**NestedVirtualChassis**](NestedVirtualChassis.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_with_config_context import DeviceWithConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceWithConfigContext from a JSON string
device_with_config_context_instance = DeviceWithConfigContext.from_json(json)
# print the JSON string representation of the object
print(DeviceWithConfigContext.to_json())

# convert the object into a dict
device_with_config_context_dict = device_with_config_context_instance.to_dict()
# create an instance of DeviceWithConfigContext from a dict
device_with_config_context_from_dict = DeviceWithConfigContext.from_dict(device_with_config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


