# SasPortalDeviceModel

Information about the model of the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firmware_version** | **str** | The firmware version of the device. | [optional] 
**hardware_version** | **str** | The hardware version of the device. | [optional] 
**name** | **str** | The name of the device model. | [optional] 
**software_version** | **str** | The software version of the device. | [optional] 
**vendor** | **str** | The name of the device vendor. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device_model import SasPortalDeviceModel

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeviceModel from a JSON string
sas_portal_device_model_instance = SasPortalDeviceModel.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeviceModel.to_json())

# convert the object into a dict
sas_portal_device_model_dict = sas_portal_device_model_instance.to_dict()
# create an instance of SasPortalDeviceModel from a dict
sas_portal_device_model_from_dict = SasPortalDeviceModel.from_dict(sas_portal_device_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


