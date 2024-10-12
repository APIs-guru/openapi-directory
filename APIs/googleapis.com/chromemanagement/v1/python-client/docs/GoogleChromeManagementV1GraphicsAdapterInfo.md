# GoogleChromeManagementV1GraphicsAdapterInfo

Information of a graphics adapter (GPU).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter** | **str** | Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2). | [optional] [readonly] 
**device_id** | **str** | Output only. Represents the graphics card device id. | [optional] [readonly] 
**driver_version** | **str** | Output only. Version of the GPU driver. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_graphics_adapter_info import GoogleChromeManagementV1GraphicsAdapterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1GraphicsAdapterInfo from a JSON string
google_chrome_management_v1_graphics_adapter_info_instance = GoogleChromeManagementV1GraphicsAdapterInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1GraphicsAdapterInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_graphics_adapter_info_dict = google_chrome_management_v1_graphics_adapter_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1GraphicsAdapterInfo from a dict
google_chrome_management_v1_graphics_adapter_info_from_dict = GoogleChromeManagementV1GraphicsAdapterInfo.from_dict(google_chrome_management_v1_graphics_adapter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


