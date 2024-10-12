# GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest

Request message for cancelling an unfinished device wipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer}&#x60;, where customer is the customer to whom the device belongs. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_cancel_wipe_device_request import GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest from a JSON string
google_apps_cloudidentity_devices_v1_cancel_wipe_device_request_instance = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_request_dict = google_apps_cloudidentity_devices_v1_cancel_wipe_device_request_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest from a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_request_from_dict = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceRequest.from_dict(google_apps_cloudidentity_devices_v1_cancel_wipe_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


