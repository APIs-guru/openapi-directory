# UpdateNetworkCameraWirelessProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**CreateNetworkCameraWirelessProfileRequestIdentity**](CreateNetworkCameraWirelessProfileRequestIdentity.md) |  | [optional] 
**name** | **str** | The name of the camera wireless profile. | [optional] 
**ssid** | [**CreateNetworkCameraWirelessProfileRequestSsid**](CreateNetworkCameraWirelessProfileRequestSsid.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_camera_wireless_profile_request import UpdateNetworkCameraWirelessProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCameraWirelessProfileRequest from a JSON string
update_network_camera_wireless_profile_request_instance = UpdateNetworkCameraWirelessProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCameraWirelessProfileRequest.to_json())

# convert the object into a dict
update_network_camera_wireless_profile_request_dict = update_network_camera_wireless_profile_request_instance.to_dict()
# create an instance of UpdateNetworkCameraWirelessProfileRequest from a dict
update_network_camera_wireless_profile_request_from_dict = UpdateNetworkCameraWirelessProfileRequest.from_dict(update_network_camera_wireless_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


