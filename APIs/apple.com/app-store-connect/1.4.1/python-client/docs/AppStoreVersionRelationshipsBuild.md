# AppStoreVersionRelationshipsBuild


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsBuildsDataInner**](AppRelationshipsBuildsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_relationships_build import AppStoreVersionRelationshipsBuild

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionRelationshipsBuild from a JSON string
app_store_version_relationships_build_instance = AppStoreVersionRelationshipsBuild.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionRelationshipsBuild.to_json())

# convert the object into a dict
app_store_version_relationships_build_dict = app_store_version_relationships_build_instance.to_dict()
# create an instance of AppStoreVersionRelationshipsBuild from a dict
app_store_version_relationships_build_from_dict = AppStoreVersionRelationshipsBuild.from_dict(app_store_version_relationships_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


