# DeviceProperties

The properties of the StorSimple device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_time** | **datetime** | The UTC time at which the device was activated | 
**active_controller** | **str** | The identifier of the active controller of the device. | 
**agent_group_version** | **int** | The device agent group version. | [optional] 
**available_local_storage_in_bytes** | **int** | The storage in bytes that is available locally on the device. | [optional] 
**available_tiered_storage_in_bytes** | **int** | The storage in bytes that is available on the device for tiered volumes. | [optional] 
**culture** | **str** | The language culture setting on the device. For eg: \&quot;en-US\&quot; | 
**details** | [**DeviceDetails**](DeviceDetails.md) |  | [optional] 
**device_configuration_status** | **str** | The current configuration status of the device. | 
**device_description** | **str** | The device description. | 
**device_location** | **str** | The location of the virtual appliance. | [optional] 
**device_software_version** | **str** | The version number of the software running on the device. | 
**device_type** | **str** | The type of the device. | 
**friendly_name** | **str** | The friendly name of the device. | 
**friendly_software_name** | **str** | The friendly name of the software running on the device. | [optional] 
**friendly_software_version** | **str** | The device friendly software version. | 
**model_description** | **str** | The device model. | 
**network_interface_card_count** | **int** | The number of network interface cards | [optional] 
**provisioned_local_storage_in_bytes** | **int** | The storage in bytes used for locally pinned volumes on the device (including additional local reservation). | [optional] 
**provisioned_tiered_storage_in_bytes** | **int** | The storage in bytes that has been provisioned on the device for tiered volumes. | [optional] 
**provisioned_volume_size_in_bytes** | **int** | Total capacity in bytes of tiered and locally pinned volumes on the device | [optional] 
**rollover_details** | [**DeviceRolloverDetails**](DeviceRolloverDetails.md) |  | [optional] 
**serial_number** | **str** | The serial number. | 
**status** | **str** | The current status of the device. | 
**target_iqn** | **str** | The target IQN. | 
**total_tiered_storage_in_bytes** | **int** | The total tiered storage available on the device in bytes. | [optional] 
**using_storage_in_bytes** | **int** | The storage in bytes that is currently being used on the device, including both local and cloud. | [optional] 
**virtual_machine_api_type** | **str** | The virtual machine API type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_properties import DeviceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceProperties from a JSON string
device_properties_instance = DeviceProperties.from_json(json)
# print the JSON string representation of the object
print(DeviceProperties.to_json())

# convert the object into a dict
device_properties_dict = device_properties_instance.to_dict()
# create an instance of DeviceProperties from a dict
device_properties_from_dict = DeviceProperties.from_dict(device_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


