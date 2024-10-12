# GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest

Request message for cancelling an unfinished user account wipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer}&#x60;, where customer is the customer to whom the device belongs. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request import GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest from a JSON string
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request_instance = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request_dict = google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest from a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request_from_dict = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest.from_dict(google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


