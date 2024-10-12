# AppScreenshotSetCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**screenshot_display_type** | [**ScreenshotDisplayType**](ScreenshotDisplayType.md) |  | 

## Example

```python
from openapi_client.models.app_screenshot_set_create_request_data_attributes import AppScreenshotSetCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetCreateRequestDataAttributes from a JSON string
app_screenshot_set_create_request_data_attributes_instance = AppScreenshotSetCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetCreateRequestDataAttributes.to_json())

# convert the object into a dict
app_screenshot_set_create_request_data_attributes_dict = app_screenshot_set_create_request_data_attributes_instance.to_dict()
# create an instance of AppScreenshotSetCreateRequestDataAttributes from a dict
app_screenshot_set_create_request_data_attributes_from_dict = AppScreenshotSetCreateRequestDataAttributes.from_dict(app_screenshot_set_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


