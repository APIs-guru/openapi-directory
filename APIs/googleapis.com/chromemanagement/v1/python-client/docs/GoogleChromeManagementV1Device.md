# GoogleChromeManagementV1Device

Describes a device reporting Chrome browser information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Output only. The ID of the device that reported this Chrome browser information. | [optional] [readonly] 
**machine** | **str** | Output only. The name of the machine within its local network. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_device import GoogleChromeManagementV1Device

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1Device from a JSON string
google_chrome_management_v1_device_instance = GoogleChromeManagementV1Device.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1Device.to_json())

# convert the object into a dict
google_chrome_management_v1_device_dict = google_chrome_management_v1_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1Device from a dict
google_chrome_management_v1_device_from_dict = GoogleChromeManagementV1Device.from_dict(google_chrome_management_v1_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


