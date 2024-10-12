# AppScreenshotUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_file_checksum** | **str** |  | [optional] 
**uploaded** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_update_request_data_attributes import AppScreenshotUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotUpdateRequestDataAttributes from a JSON string
app_screenshot_update_request_data_attributes_instance = AppScreenshotUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotUpdateRequestDataAttributes.to_json())

# convert the object into a dict
app_screenshot_update_request_data_attributes_dict = app_screenshot_update_request_data_attributes_instance.to_dict()
# create an instance of AppScreenshotUpdateRequestDataAttributes from a dict
app_screenshot_update_request_data_attributes_from_dict = AppScreenshotUpdateRequestDataAttributes.from_dict(app_screenshot_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


