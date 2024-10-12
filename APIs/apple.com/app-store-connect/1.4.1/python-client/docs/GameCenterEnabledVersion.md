# GameCenterEnabledVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**GameCenterEnabledVersionAttributes**](GameCenterEnabledVersionAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**GameCenterEnabledVersionRelationships**](GameCenterEnabledVersionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.game_center_enabled_version import GameCenterEnabledVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GameCenterEnabledVersion from a JSON string
game_center_enabled_version_instance = GameCenterEnabledVersion.from_json(json)
# print the JSON string representation of the object
print(GameCenterEnabledVersion.to_json())

# convert the object into a dict
game_center_enabled_version_dict = game_center_enabled_version_instance.to_dict()
# create an instance of GameCenterEnabledVersion from a dict
game_center_enabled_version_from_dict = GameCenterEnabledVersion.from_dict(game_center_enabled_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


