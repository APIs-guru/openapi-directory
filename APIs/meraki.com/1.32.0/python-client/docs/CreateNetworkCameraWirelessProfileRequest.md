# CreateNetworkCameraWirelessProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**CreateNetworkCameraWirelessProfileRequestIdentity**](CreateNetworkCameraWirelessProfileRequestIdentity.md) |  | [optional] 
**name** | **str** | The name of the camera wireless profile. This parameter is required. | 
**ssid** | [**CreateNetworkCameraWirelessProfileRequestSsid**](CreateNetworkCameraWirelessProfileRequestSsid.md) |  | 

## Example

```python
from openapi_client.models.create_network_camera_wireless_profile_request import CreateNetworkCameraWirelessProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraWirelessProfileRequest from a JSON string
create_network_camera_wireless_profile_request_instance = CreateNetworkCameraWirelessProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraWirelessProfileRequest.to_json())

# convert the object into a dict
create_network_camera_wireless_profile_request_dict = create_network_camera_wireless_profile_request_instance.to_dict()
# create an instance of CreateNetworkCameraWirelessProfileRequest from a dict
create_network_camera_wireless_profile_request_from_dict = CreateNetworkCameraWirelessProfileRequest.from_dict(create_network_camera_wireless_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


