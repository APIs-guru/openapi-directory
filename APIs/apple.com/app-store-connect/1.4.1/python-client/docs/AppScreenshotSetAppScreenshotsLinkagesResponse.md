# AppScreenshotSetAppScreenshotsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppScreenshotSetRelationshipsAppScreenshotsDataInner]**](AppScreenshotSetRelationshipsAppScreenshotsDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_set_app_screenshots_linkages_response import AppScreenshotSetAppScreenshotsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetAppScreenshotsLinkagesResponse from a JSON string
app_screenshot_set_app_screenshots_linkages_response_instance = AppScreenshotSetAppScreenshotsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetAppScreenshotsLinkagesResponse.to_json())

# convert the object into a dict
app_screenshot_set_app_screenshots_linkages_response_dict = app_screenshot_set_app_screenshots_linkages_response_instance.to_dict()
# create an instance of AppScreenshotSetAppScreenshotsLinkagesResponse from a dict
app_screenshot_set_app_screenshots_linkages_response_from_dict = AppScreenshotSetAppScreenshotsLinkagesResponse.from_dict(app_screenshot_set_app_screenshots_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


