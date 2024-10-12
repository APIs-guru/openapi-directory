# UpdateDeviceCameraWirelessProfilesRequestIds

The ids of the wireless profile to assign to the given camera

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | The id of the backup wireless profile | [optional] 
**primary** | **str** | The id of the primary wireless profile | [optional] 
**secondary** | **str** | The id of the secondary wireless profile | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_wireless_profiles_request_ids import UpdateDeviceCameraWirelessProfilesRequestIds

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraWirelessProfilesRequestIds from a JSON string
update_device_camera_wireless_profiles_request_ids_instance = UpdateDeviceCameraWirelessProfilesRequestIds.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraWirelessProfilesRequestIds.to_json())

# convert the object into a dict
update_device_camera_wireless_profiles_request_ids_dict = update_device_camera_wireless_profiles_request_ids_instance.to_dict()
# create an instance of UpdateDeviceCameraWirelessProfilesRequestIds from a dict
update_device_camera_wireless_profiles_request_ids_from_dict = UpdateDeviceCameraWirelessProfilesRequestIds.from_dict(update_device_camera_wireless_profiles_request_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


