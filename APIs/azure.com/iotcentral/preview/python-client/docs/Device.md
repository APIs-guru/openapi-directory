# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Whether the device has been approved to connect to IoT Central. | [optional] 
**description** | **str** | Detailed description of the device. | [optional] 
**display_name** | **str** | Display name of the device. | [optional] 
**etag** | **str** | ETag used to prevent conflict in device updates. | [optional] 
**id** | **str** | Unique ID of the device. | [optional] [readonly] 
**instance_of** | **str** | The model definition for the device. | 
**provisioned** | **bool** | Whether resources have been allocated for the device. | [optional] [readonly] 
**simulated** | **bool** | Whether the device is simulated. | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


