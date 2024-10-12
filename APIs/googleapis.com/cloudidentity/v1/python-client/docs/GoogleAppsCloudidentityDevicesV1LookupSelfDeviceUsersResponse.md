# GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse

Response containing resource names of the DeviceUsers associated with the caller's credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | The customer resource name that may be passed back to other Devices API methods such as List, Get, etc. | [optional] 
**names** | **List[str]** | [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: &#x60;devices/{device}/deviceUsers/{user_resource}&#x60;, where device is the unique ID assigned to a Device and user_resource is the unique user ID | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_lookup_self_device_users_response import GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse from a JSON string
google_apps_cloudidentity_devices_v1_lookup_self_device_users_response_instance = GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_lookup_self_device_users_response_dict = google_apps_cloudidentity_devices_v1_lookup_self_device_users_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse from a dict
google_apps_cloudidentity_devices_v1_lookup_self_device_users_response_from_dict = GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse.from_dict(google_apps_cloudidentity_devices_v1_lookup_self_device_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


