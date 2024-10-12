# CreateNetworkCameraWirelessProfileRequestIdentity

The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password of the identity. | [optional] 
**username** | **str** | The username of the identity. | [optional] 

## Example

```python
from openapi_client.models.create_network_camera_wireless_profile_request_identity import CreateNetworkCameraWirelessProfileRequestIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkCameraWirelessProfileRequestIdentity from a JSON string
create_network_camera_wireless_profile_request_identity_instance = CreateNetworkCameraWirelessProfileRequestIdentity.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkCameraWirelessProfileRequestIdentity.to_json())

# convert the object into a dict
create_network_camera_wireless_profile_request_identity_dict = create_network_camera_wireless_profile_request_identity_instance.to_dict()
# create an instance of CreateNetworkCameraWirelessProfileRequestIdentity from a dict
create_network_camera_wireless_profile_request_identity_from_dict = CreateNetworkCameraWirelessProfileRequestIdentity.from_dict(create_network_camera_wireless_profile_request_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


