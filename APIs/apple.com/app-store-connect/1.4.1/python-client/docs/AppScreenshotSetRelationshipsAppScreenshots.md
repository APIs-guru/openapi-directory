# AppScreenshotSetRelationshipsAppScreenshots


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppScreenshotSetRelationshipsAppScreenshotsDataInner]**](AppScreenshotSetRelationshipsAppScreenshotsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_set_relationships_app_screenshots import AppScreenshotSetRelationshipsAppScreenshots

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetRelationshipsAppScreenshots from a JSON string
app_screenshot_set_relationships_app_screenshots_instance = AppScreenshotSetRelationshipsAppScreenshots.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetRelationshipsAppScreenshots.to_json())

# convert the object into a dict
app_screenshot_set_relationships_app_screenshots_dict = app_screenshot_set_relationships_app_screenshots_instance.to_dict()
# create an instance of AppScreenshotSetRelationshipsAppScreenshots from a dict
app_screenshot_set_relationships_app_screenshots_from_dict = AppScreenshotSetRelationshipsAppScreenshots.from_dict(app_screenshot_set_relationships_app_screenshots_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


