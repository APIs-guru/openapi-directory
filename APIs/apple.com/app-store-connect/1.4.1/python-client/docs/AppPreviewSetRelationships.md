# AppPreviewSetRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_previews** | [**AppPreviewSetRelationshipsAppPreviews**](AppPreviewSetRelationshipsAppPreviews.md) |  | [optional] 
**app_store_version_localization** | [**AppPreviewSetRelationshipsAppStoreVersionLocalization**](AppPreviewSetRelationshipsAppStoreVersionLocalization.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_set_relationships import AppPreviewSetRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetRelationships from a JSON string
app_preview_set_relationships_instance = AppPreviewSetRelationships.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetRelationships.to_json())

# convert the object into a dict
app_preview_set_relationships_dict = app_preview_set_relationships_instance.to_dict()
# create an instance of AppPreviewSetRelationships from a dict
app_preview_set_relationships_from_dict = AppPreviewSetRelationships.from_dict(app_preview_set_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


