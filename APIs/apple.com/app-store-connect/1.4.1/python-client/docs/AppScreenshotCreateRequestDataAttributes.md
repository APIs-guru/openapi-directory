# AppScreenshotCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | 
**file_size** | **int** |  | 

## Example

```python
from openapi_client.models.app_screenshot_create_request_data_attributes import AppScreenshotCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotCreateRequestDataAttributes from a JSON string
app_screenshot_create_request_data_attributes_instance = AppScreenshotCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotCreateRequestDataAttributes.to_json())

# convert the object into a dict
app_screenshot_create_request_data_attributes_dict = app_screenshot_create_request_data_attributes_instance.to_dict()
# create an instance of AppScreenshotCreateRequestDataAttributes from a dict
app_screenshot_create_request_data_attributes_from_dict = AppScreenshotCreateRequestDataAttributes.from_dict(app_screenshot_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


