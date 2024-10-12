# GameCenterEnabledVersionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**compatible_versions** | [**AppRelationshipsGameCenterEnabledVersions**](AppRelationshipsGameCenterEnabledVersions.md) |  | [optional] 

## Example

```python
from openapi_client.models.game_center_enabled_version_relationships import GameCenterEnabledVersionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of GameCenterEnabledVersionRelationships from a JSON string
game_center_enabled_version_relationships_instance = GameCenterEnabledVersionRelationships.from_json(json)
# print the JSON string representation of the object
print(GameCenterEnabledVersionRelationships.to_json())

# convert the object into a dict
game_center_enabled_version_relationships_dict = game_center_enabled_version_relationships_instance.to_dict()
# create an instance of GameCenterEnabledVersionRelationships from a dict
game_center_enabled_version_relationships_from_dict = GameCenterEnabledVersionRelationships.from_dict(game_center_enabled_version_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


