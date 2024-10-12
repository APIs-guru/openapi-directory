# AppScreenshotCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppScreenshotCreateRequestData**](AppScreenshotCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_screenshot_create_request import AppScreenshotCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotCreateRequest from a JSON string
app_screenshot_create_request_instance = AppScreenshotCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotCreateRequest.to_json())

# convert the object into a dict
app_screenshot_create_request_dict = app_screenshot_create_request_instance.to_dict()
# create an instance of AppScreenshotCreateRequest from a dict
app_screenshot_create_request_from_dict = AppScreenshotCreateRequest.from_dict(app_screenshot_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


