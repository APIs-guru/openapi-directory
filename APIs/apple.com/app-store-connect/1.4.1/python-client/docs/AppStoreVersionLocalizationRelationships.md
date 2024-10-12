# AppStoreVersionLocalizationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_preview_sets** | [**AppStoreVersionLocalizationRelationshipsAppPreviewSets**](AppStoreVersionLocalizationRelationshipsAppPreviewSets.md) |  | [optional] 
**app_screenshot_sets** | [**AppStoreVersionLocalizationRelationshipsAppScreenshotSets**](AppStoreVersionLocalizationRelationshipsAppScreenshotSets.md) |  | [optional] 
**app_store_version** | [**AppStoreReviewDetailRelationshipsAppStoreVersion**](AppStoreReviewDetailRelationshipsAppStoreVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_localization_relationships import AppStoreVersionLocalizationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationRelationships from a JSON string
app_store_version_localization_relationships_instance = AppStoreVersionLocalizationRelationships.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationRelationships.to_json())

# convert the object into a dict
app_store_version_localization_relationships_dict = app_store_version_localization_relationships_instance.to_dict()
# create an instance of AppStoreVersionLocalizationRelationships from a dict
app_store_version_localization_relationships_from_dict = AppStoreVersionLocalizationRelationships.from_dict(app_store_version_localization_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


