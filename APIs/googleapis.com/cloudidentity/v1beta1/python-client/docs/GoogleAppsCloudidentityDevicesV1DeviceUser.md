# GoogleAppsCloudidentityDevicesV1DeviceUser

Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compromised_state** | **str** | Compromised State of the DeviceUser object | [optional] 
**create_time** | **str** | When the user first signed in to the device | [optional] 
**first_sync_time** | **str** | Output only. Most recent time when user registered with this service. | [optional] [readonly] 
**language_code** | **str** | Output only. Default locale used on device, in IETF BCP-47 format. | [optional] [readonly] 
**last_sync_time** | **str** | Output only. Last time when user synced with policies. | [optional] [readonly] 
**management_state** | **str** | Output only. Management state of the user on the device. | [optional] [readonly] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: &#x60;devices/{device}/deviceUsers/{device_user}&#x60;, where &#x60;device_user&#x60; uniquely identifies a user&#39;s use of a device. | [optional] [readonly] 
**password_state** | **str** | Password state of the DeviceUser object | [optional] 
**user_agent** | **str** | Output only. User agent on the device for this specific user | [optional] [readonly] 
**user_email** | **str** | Email address of the user registered on the device. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_device_user import GoogleAppsCloudidentityDevicesV1DeviceUser

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1DeviceUser from a JSON string
google_apps_cloudidentity_devices_v1_device_user_instance = GoogleAppsCloudidentityDevicesV1DeviceUser.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1DeviceUser.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_device_user_dict = google_apps_cloudidentity_devices_v1_device_user_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1DeviceUser from a dict
google_apps_cloudidentity_devices_v1_device_user_from_dict = GoogleAppsCloudidentityDevicesV1DeviceUser.from_dict(google_apps_cloudidentity_devices_v1_device_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


