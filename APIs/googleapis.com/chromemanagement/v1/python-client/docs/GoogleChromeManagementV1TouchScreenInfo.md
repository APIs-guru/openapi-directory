# GoogleChromeManagementV1TouchScreenInfo

Information on the device touch screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GoogleChromeManagementV1TouchScreenDevice]**](GoogleChromeManagementV1TouchScreenDevice.md) | Output only. List of the internal touch screen devices. | [optional] [readonly] 
**touchpad_library** | **str** | Output only. Touchpad library name used by the input stack. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_touch_screen_info import GoogleChromeManagementV1TouchScreenInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TouchScreenInfo from a JSON string
google_chrome_management_v1_touch_screen_info_instance = GoogleChromeManagementV1TouchScreenInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TouchScreenInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_touch_screen_info_dict = google_chrome_management_v1_touch_screen_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1TouchScreenInfo from a dict
google_chrome_management_v1_touch_screen_info_from_dict = GoogleChromeManagementV1TouchScreenInfo.from_dict(google_chrome_management_v1_touch_screen_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


