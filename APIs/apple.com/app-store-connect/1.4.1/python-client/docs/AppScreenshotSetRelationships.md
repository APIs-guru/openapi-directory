# AppScreenshotSetRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_screenshots** | [**AppScreenshotSetRelationshipsAppScreenshots**](AppScreenshotSetRelationshipsAppScreenshots.md) |  | [optional] 
**app_store_version_localization** | [**AppPreviewSetRelationshipsAppStoreVersionLocalization**](AppPreviewSetRelationshipsAppStoreVersionLocalization.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_set_relationships import AppScreenshotSetRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotSetRelationships from a JSON string
app_screenshot_set_relationships_instance = AppScreenshotSetRelationships.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotSetRelationships.to_json())

# convert the object into a dict
app_screenshot_set_relationships_dict = app_screenshot_set_relationships_instance.to_dict()
# create an instance of AppScreenshotSetRelationships from a dict
app_screenshot_set_relationships_from_dict = AppScreenshotSetRelationships.from_dict(app_screenshot_set_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


