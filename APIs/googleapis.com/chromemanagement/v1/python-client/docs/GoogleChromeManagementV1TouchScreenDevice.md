# GoogleChromeManagementV1TouchScreenDevice

Information of an internal touch screen device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. Touch screen device display name. | [optional] [readonly] 
**stylus_capable** | **bool** | Output only. Touch screen device is stylus capable or not. | [optional] [readonly] 
**touch_point_count** | **int** | Output only. Number of touch points supported on the device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_touch_screen_device import GoogleChromeManagementV1TouchScreenDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TouchScreenDevice from a JSON string
google_chrome_management_v1_touch_screen_device_instance = GoogleChromeManagementV1TouchScreenDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TouchScreenDevice.to_json())

# convert the object into a dict
google_chrome_management_v1_touch_screen_device_dict = google_chrome_management_v1_touch_screen_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1TouchScreenDevice from a dict
google_chrome_management_v1_touch_screen_device_from_dict = GoogleChromeManagementV1TouchScreenDevice.from_dict(google_chrome_management_v1_touch_screen_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


