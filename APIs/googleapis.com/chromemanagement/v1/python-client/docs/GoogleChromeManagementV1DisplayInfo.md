# GoogleChromeManagementV1DisplayInfo

Information for a display.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Output only. Represents the graphics card device id. | [optional] [readonly] 
**display_name** | **str** | Output only. Display device name. | [optional] [readonly] 
**is_internal** | **bool** | Output only. Indicates if display is internal or not. | [optional] [readonly] 
**refresh_rate** | **int** | Output only. Refresh rate in Hz. | [optional] [readonly] 
**resolution_height** | **int** | Output only. Resolution height in pixels. | [optional] [readonly] 
**resolution_width** | **int** | Output only. Resolution width in pixels. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_display_info import GoogleChromeManagementV1DisplayInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DisplayInfo from a JSON string
google_chrome_management_v1_display_info_instance = GoogleChromeManagementV1DisplayInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DisplayInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_display_info_dict = google_chrome_management_v1_display_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1DisplayInfo from a dict
google_chrome_management_v1_display_info_from_dict = GoogleChromeManagementV1DisplayInfo.from_dict(google_chrome_management_v1_display_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


