# AppPreviewSetRelationshipsAppPreviews


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewSetRelationshipsAppPreviewsDataInner]**](AppPreviewSetRelationshipsAppPreviewsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_preview_set_relationships_app_previews import AppPreviewSetRelationshipsAppPreviews

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreviewSetRelationshipsAppPreviews from a JSON string
app_preview_set_relationships_app_previews_instance = AppPreviewSetRelationshipsAppPreviews.from_json(json)
# print the JSON string representation of the object
print(AppPreviewSetRelationshipsAppPreviews.to_json())

# convert the object into a dict
app_preview_set_relationships_app_previews_dict = app_preview_set_relationships_app_previews_instance.to_dict()
# create an instance of AppPreviewSetRelationshipsAppPreviews from a dict
app_preview_set_relationships_app_previews_from_dict = AppPreviewSetRelationshipsAppPreviews.from_dict(app_preview_set_relationships_app_previews_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


