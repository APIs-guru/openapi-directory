# AppRelationshipsPreReleaseVersions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsPreReleaseVersionsDataInner]**](AppRelationshipsPreReleaseVersionsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_pre_release_versions import AppRelationshipsPreReleaseVersions

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsPreReleaseVersions from a JSON string
app_relationships_pre_release_versions_instance = AppRelationshipsPreReleaseVersions.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsPreReleaseVersions.to_json())

# convert the object into a dict
app_relationships_pre_release_versions_dict = app_relationships_pre_release_versions_instance.to_dict()
# create an instance of AppRelationshipsPreReleaseVersions from a dict
app_relationships_pre_release_versions_from_dict = AppRelationshipsPreReleaseVersions.from_dict(app_relationships_pre_release_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


