# CreateNetworkCameraWirelessProfileRequestSsid

The details of the SSID config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **str** | The auth mode of the SSID. It can be set to (&#39;psk&#39;, &#39;8021x-radius&#39;). | [optional] 
**encryption_mode** | **str** | The encryption mode of the SSID. It can be set to (&#39;wpa&#39;, &#39;wpa-eap&#39;). With &#39;wpa&#39; mode, the authMode should be &#39;psk&#39; and with &#39;wpa-eap&#39; the authMode should be &#39;8021x-radius&#39; | [optional] 
**name** | **str** | The name of the SSID. | [optional] 
**psk** | **str** | The pre-shared key of the SSID. | [optional] 

## Example

```python
from openapi_client.models.create_network_camera_wireless_profile_request_ssid import CreateNetworkCameraWirelessProfileRequestSsid

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraWirelessProfileRequestSsid from a JSON string
create_network_camera_wireless_profile_request_ssid_instance = CreateNetworkCameraWirelessProfileRequestSsid.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraWirelessProfileRequestSsid.to_json())

# convert the object into a dict
create_network_camera_wireless_profile_request_ssid_dict = create_network_camera_wireless_profile_request_ssid_instance.to_dict()
# create an instance of CreateNetworkCameraWirelessProfileRequestSsid from a dict
create_network_camera_wireless_profile_request_ssid_from_dict = CreateNetworkCameraWirelessProfileRequestSsid.from_dict(create_network_camera_wireless_profile_request_ssid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


