# ListDeviceConfigVersionsResponse

Response for `ListDeviceConfigVersions`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_configs** | [**List[DeviceConfig]**](DeviceConfig.md) | The device configuration for the last few versions. Versions are listed in decreasing order, starting from the most recent one. | [optional] 

## Example

```python
from openapi_client.models.list_device_config_versions_response import ListDeviceConfigVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeviceConfigVersionsResponse from a JSON string
list_device_config_versions_response_instance = ListDeviceConfigVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeviceConfigVersionsResponse.to_json())

# convert the object into a dict
list_device_config_versions_response_dict = list_device_config_versions_response_instance.to_dict()
# create an instance of ListDeviceConfigVersionsResponse from a dict
list_device_config_versions_response_from_dict = ListDeviceConfigVersionsResponse.from_dict(list_device_config_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


