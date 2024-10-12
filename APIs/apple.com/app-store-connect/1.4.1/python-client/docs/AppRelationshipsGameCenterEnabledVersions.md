# AppRelationshipsGameCenterEnabledVersions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsGameCenterEnabledVersionsDataInner]**](AppRelationshipsGameCenterEnabledVersionsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_game_center_enabled_versions import AppRelationshipsGameCenterEnabledVersions

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsGameCenterEnabledVersions from a JSON string
app_relationships_game_center_enabled_versions_instance = AppRelationshipsGameCenterEnabledVersions.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsGameCenterEnabledVersions.to_json())

# convert the object into a dict
app_relationships_game_center_enabled_versions_dict = app_relationships_game_center_enabled_versions_instance.to_dict()
# create an instance of AppRelationshipsGameCenterEnabledVersions from a dict
app_relationships_game_center_enabled_versions_from_dict = AppRelationshipsGameCenterEnabledVersions.from_dict(app_relationships_game_center_enabled_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


