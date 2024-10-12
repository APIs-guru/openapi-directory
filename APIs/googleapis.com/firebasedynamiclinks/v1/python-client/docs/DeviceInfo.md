# DeviceInfo

Signals associated with the device making the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_model_name** | **str** | Device model name. | [optional] 
**language_code** | **str** | Device language code setting. | [optional] 
**language_code_from_webview** | **str** | Device language code setting obtained by executing JavaScript code in WebView. | [optional] 
**language_code_raw** | **str** | Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS. | [optional] 
**screen_resolution_height** | **str** | Device display resolution height. | [optional] 
**screen_resolution_width** | **str** | Device display resolution width. | [optional] 
**timezone** | **str** | Device timezone setting. | [optional] 

## Example

```python
from openapi_client.models.device_info import DeviceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceInfo from a JSON string
device_info_instance = DeviceInfo.from_json(json)
# print the JSON string representation of the object
print(DeviceInfo.to_json())

# convert the object into a dict
device_info_dict = device_info_instance.to_dict()
# create an instance of DeviceInfo from a dict
device_info_from_dict = DeviceInfo.from_dict(device_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


