# AppScreenshotCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppScreenshotCreateRequestDataAttributes**](AppScreenshotCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppScreenshotCreateRequestDataRelationships**](AppScreenshotCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_screenshot_create_request_data import AppScreenshotCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotCreateRequestData from a JSON string
app_screenshot_create_request_data_instance = AppScreenshotCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotCreateRequestData.to_json())

# convert the object into a dict
app_screenshot_create_request_data_dict = app_screenshot_create_request_data_instance.to_dict()
# create an instance of AppScreenshotCreateRequestData from a dict
app_screenshot_create_request_data_from_dict = AppScreenshotCreateRequestData.from_dict(app_screenshot_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


