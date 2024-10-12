# ScreenviewData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_name** | **str** | The application name. | [optional] 
**mobile_device_branding** | **str** | Mobile manufacturer or branded name. Eg: \&quot;Google\&quot;, \&quot;Apple\&quot; etc. | [optional] 
**mobile_device_model** | **str** | Mobile device model. Eg: \&quot;Pixel\&quot;, \&quot;iPhone\&quot; etc. | [optional] 
**screen_name** | **str** | The name of the screen. | [optional] 

## Example

```python
from openapi_client.models.screenview_data import ScreenviewData

# TODO update the JSON string below
json = "{}"
# create an instance of ScreenviewData from a JSON string
screenview_data_instance = ScreenviewData.from_json(json)
# print the JSON string representation of the object
print(ScreenviewData.to_json())

# convert the object into a dict
screenview_data_dict = screenview_data_instance.to_dict()
# create an instance of ScreenviewData from a dict
screenview_data_from_dict = ScreenviewData.from_dict(screenview_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


