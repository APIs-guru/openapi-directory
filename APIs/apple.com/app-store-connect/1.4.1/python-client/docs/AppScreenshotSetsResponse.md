# AppScreenshotSetsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppScreenshotSet]**](AppScreenshotSet.md) |  | 
**included** | [**List[AppScreenshot]**](AppScreenshot.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_sets_response import AppScreenshotSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetsResponse from a JSON string
app_screenshot_sets_response_instance = AppScreenshotSetsResponse.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetsResponse.to_json())

# convert the object into a dict
app_screenshot_sets_response_dict = app_screenshot_sets_response_instance.to_dict()
# create an instance of AppScreenshotSetsResponse from a dict
app_screenshot_sets_response_from_dict = AppScreenshotSetsResponse.from_dict(app_screenshot_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


