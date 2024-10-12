# GoogleChromeManagementV1DisplayDevice

Information of a display device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_height_mm** | **int** | Output only. Display height in millimeters. | [optional] [readonly] 
**display_name** | **str** | Output only. Display device name. | [optional] [readonly] 
**display_width_mm** | **int** | Output only. Display width in millimeters. | [optional] [readonly] 
**internal** | **bool** | Output only. Is display internal or not. | [optional] [readonly] 
**manufacture_year** | **int** | Output only. Year of manufacture. | [optional] [readonly] 
**manufacturer_id** | **str** | Output only. Three letter manufacturer ID. | [optional] [readonly] 
**model_id** | **int** | Output only. Manufacturer product code. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_display_device import GoogleChromeManagementV1DisplayDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1DisplayDevice from a JSON string
google_chrome_management_v1_display_device_instance = GoogleChromeManagementV1DisplayDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1DisplayDevice.to_json())

# convert the object into a dict
google_chrome_management_v1_display_device_dict = google_chrome_management_v1_display_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1DisplayDevice from a dict
google_chrome_management_v1_display_device_from_dict = GoogleChromeManagementV1DisplayDevice.from_dict(google_chrome_management_v1_display_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


