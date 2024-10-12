# AppRelationshipsAppStoreVersions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsAppStoreVersionsDataInner]**](AppRelationshipsAppStoreVersionsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_app_store_versions import AppRelationshipsAppStoreVersions

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsAppStoreVersions from a JSON string
app_relationships_app_store_versions_instance = AppRelationshipsAppStoreVersions.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsAppStoreVersions.to_json())

# convert the object into a dict
app_relationships_app_store_versions_dict = app_relationships_app_store_versions_instance.to_dict()
# create an instance of AppRelationshipsAppStoreVersions from a dict
app_relationships_app_store_versions_from_dict = AppRelationshipsAppStoreVersions.from_dict(app_relationships_app_store_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


