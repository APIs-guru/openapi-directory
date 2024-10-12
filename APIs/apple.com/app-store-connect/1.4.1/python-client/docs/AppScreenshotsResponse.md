# AppScreenshotsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppScreenshot]**](AppScreenshot.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshots_response import AppScreenshotsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotsResponse from a JSON string
app_screenshots_response_instance = AppScreenshotsResponse.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotsResponse.to_json())

# convert the object into a dict
app_screenshots_response_dict = app_screenshots_response_instance.to_dict()
# create an instance of AppScreenshotsResponse from a dict
app_screenshots_response_from_dict = AppScreenshotsResponse.from_dict(app_screenshots_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


