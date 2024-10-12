# GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest

Request message for approving the device to access user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer}&#x60;, where customer is the customer to whom the device belongs. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_approve_device_user_request import GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest from a JSON string
google_apps_cloudidentity_devices_v1_approve_device_user_request_instance = GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_approve_device_user_request_dict = google_apps_cloudidentity_devices_v1_approve_device_user_request_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest from a dict
google_apps_cloudidentity_devices_v1_approve_device_user_request_from_dict = GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest.from_dict(google_apps_cloudidentity_devices_v1_approve_device_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


