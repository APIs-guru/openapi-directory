# AppStoreVersionRelationshipsAppStoreVersionLocalizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPreviewSetRelationshipsAppStoreVersionLocalizationData]**](AppPreviewSetRelationshipsAppStoreVersionLocalizationData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_relationships_app_store_version_localizations import AppStoreVersionRelationshipsAppStoreVersionLocalizations

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionRelationshipsAppStoreVersionLocalizations from a JSON string
app_store_version_relationships_app_store_version_localizations_instance = AppStoreVersionRelationshipsAppStoreVersionLocalizations.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionRelationshipsAppStoreVersionLocalizations.to_json())

# convert the object into a dict
app_store_version_relationships_app_store_version_localizations_dict = app_store_version_relationships_app_store_version_localizations_instance.to_dict()
# create an instance of AppStoreVersionRelationshipsAppStoreVersionLocalizations from a dict
app_store_version_relationships_app_store_version_localizations_from_dict = AppStoreVersionRelationshipsAppStoreVersionLocalizations.from_dict(app_store_version_relationships_app_store_version_localizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


