# AppScreenshotUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppScreenshotUpdateRequestData**](AppScreenshotUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_screenshot_update_request import AppScreenshotUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotUpdateRequest from a JSON string
app_screenshot_update_request_instance = AppScreenshotUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotUpdateRequest.to_json())

# convert the object into a dict
app_screenshot_update_request_dict = app_screenshot_update_request_instance.to_dict()
# create an instance of AppScreenshotUpdateRequest from a dict
app_screenshot_update_request_from_dict = AppScreenshotUpdateRequest.from_dict(app_screenshot_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


