# ModifyCloudToDeviceConfigRequest

Request for `ModifyCloudToDeviceConfig`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_data** | **bytearray** | Required. The configuration data for the device. | [optional] 
**version_to_update** | **str** | The version number to update. If this value is zero, it will not check the version number of the server and will always update the current version; otherwise, this update will fail if the version number found on the server does not match this version number. This is used to support multiple simultaneous updates without losing data. | [optional] 

## Example

```python
from openapi_client.models.modify_cloud_to_device_config_request import ModifyCloudToDeviceConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyCloudToDeviceConfigRequest from a JSON string
modify_cloud_to_device_config_request_instance = ModifyCloudToDeviceConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyCloudToDeviceConfigRequest.to_json())

# convert the object into a dict
modify_cloud_to_device_config_request_dict = modify_cloud_to_device_config_request_instance.to_dict()
# create an instance of ModifyCloudToDeviceConfigRequest from a dict
modify_cloud_to_device_config_request_from_dict = ModifyCloudToDeviceConfigRequest.from_dict(modify_cloud_to_device_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


