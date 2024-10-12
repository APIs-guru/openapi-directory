# AppStoreVersionLocalizationRelationshipsAppPreviewSets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewRelationshipsAppPreviewSetData]**](AppPreviewRelationshipsAppPreviewSetData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_localization_relationships_app_preview_sets import AppStoreVersionLocalizationRelationshipsAppPreviewSets

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationRelationshipsAppPreviewSets from a JSON string
app_store_version_localization_relationships_app_preview_sets_instance = AppStoreVersionLocalizationRelationshipsAppPreviewSets.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationRelationshipsAppPreviewSets.to_json())

# convert the object into a dict
app_store_version_localization_relationships_app_preview_sets_dict = app_store_version_localization_relationships_app_preview_sets_instance.to_dict()
# create an instance of AppStoreVersionLocalizationRelationshipsAppPreviewSets from a dict
app_store_version_localization_relationships_app_preview_sets_from_dict = AppStoreVersionLocalizationRelationshipsAppPreviewSets.from_dict(app_store_version_localization_relationships_app_preview_sets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


