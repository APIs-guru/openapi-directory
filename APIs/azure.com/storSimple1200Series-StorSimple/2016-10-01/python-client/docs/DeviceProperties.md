# DeviceProperties

Encases all the properties of the Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_time** | **datetime** | The UTC time at which the device was activated | [optional] 
**allowed_device_operations** | **List[str]** | Operations that are allowed on the device based on its current state | [optional] 
**culture** | **str** | Language culture setting on the device. For eg: \&quot;en-US\&quot; | [optional] 
**details** | [**DeviceDetails**](DeviceDetails.md) |  | [optional] 
**device_capabilities** | **List[str]** | Device can be configured either as FileServer or IscsiServer | [optional] 
**device_configuration_status** | **str** | \&quot;Complete\&quot; if the device has been successfully registered as File/IscsiServer and the creation of share/volume is complete, \&quot;Pending\&quot; if the device is only registered but the creation of share/volume is complete is still pending | [optional] 
**device_description** | **str** | Short description given for the device | [optional] 
**device_software_version** | **str** | Version number of the software running on the device | [optional] 
**domain_name** | **str** | Fully qualified name of the domain to which the device is attached | [optional] 
**friendly_software_name** | **str** | Friendly name for the software version | [optional] 
**model_description** | **str** | Name of the device model | [optional] 
**status** | **str** | Current status of the device | [optional] 
**type** | **str** | Type of the device | [optional] 

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


