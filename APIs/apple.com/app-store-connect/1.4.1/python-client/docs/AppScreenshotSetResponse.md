# AppScreenshotSetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppScreenshotSet**](AppScreenshotSet.md) |  | 
**included** | [**List[AppScreenshot]**](AppScreenshot.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_screenshot_set_response import AppScreenshotSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetResponse from a JSON string
app_screenshot_set_response_instance = AppScreenshotSetResponse.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetResponse.to_json())

# convert the object into a dict
app_screenshot_set_response_dict = app_screenshot_set_response_instance.to_dict()
# create an instance of AppScreenshotSetResponse from a dict
app_screenshot_set_response_from_dict = AppScreenshotSetResponse.from_dict(app_screenshot_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


