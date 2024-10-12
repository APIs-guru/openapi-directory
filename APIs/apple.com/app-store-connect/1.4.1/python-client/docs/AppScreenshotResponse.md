# AppScreenshotResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppScreenshot**](AppScreenshot.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_screenshot_response import AppScreenshotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotResponse from a JSON string
app_screenshot_response_instance = AppScreenshotResponse.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotResponse.to_json())

# convert the object into a dict
app_screenshot_response_dict = app_screenshot_response_instance.to_dict()
# create an instance of AppScreenshotResponse from a dict
app_screenshot_response_from_dict = AppScreenshotResponse.from_dict(app_screenshot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


