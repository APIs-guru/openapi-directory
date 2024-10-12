# AppScreenshotSetCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotSetCreateRequestDataAttributes**](AppScreenshotSetCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppPreviewSetCreateRequestDataRelationships**](AppPreviewSetCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_screenshot_set_create_request_data import AppScreenshotSetCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetCreateRequestData from a JSON string
app_screenshot_set_create_request_data_instance = AppScreenshotSetCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetCreateRequestData.to_json())

# convert the object into a dict
app_screenshot_set_create_request_data_dict = app_screenshot_set_create_request_data_instance.to_dict()
# create an instance of AppScreenshotSetCreateRequestData from a dict
app_screenshot_set_create_request_data_from_dict = AppScreenshotSetCreateRequestData.from_dict(app_screenshot_set_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


