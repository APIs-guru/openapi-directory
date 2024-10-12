# AppScreenshotUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotUpdateRequestDataAttributes**](AppScreenshotUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_screenshot_update_request_data import AppScreenshotUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotUpdateRequestData from a JSON string
app_screenshot_update_request_data_instance = AppScreenshotUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotUpdateRequestData.to_json())

# convert the object into a dict
app_screenshot_update_request_data_dict = app_screenshot_update_request_data_instance.to_dict()
# create an instance of AppScreenshotUpdateRequestData from a dict
app_screenshot_update_request_data_from_dict = AppScreenshotUpdateRequestData.from_dict(app_screenshot_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


