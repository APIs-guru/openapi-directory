# GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse

Response message that is returned from the ListDeviceUsers method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_users** | [**List[GoogleAppsCloudidentityDevicesV1DeviceUser]**](GoogleAppsCloudidentityDevicesV1DeviceUser.md) | Devices meeting the list restrictions. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_list_device_users_response import GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse from a JSON string
google_apps_cloudidentity_devices_v1_list_device_users_response_instance = GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_list_device_users_response_dict = google_apps_cloudidentity_devices_v1_list_device_users_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse from a dict
google_apps_cloudidentity_devices_v1_list_device_users_response_from_dict = GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse.from_dict(google_apps_cloudidentity_devices_v1_list_device_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


