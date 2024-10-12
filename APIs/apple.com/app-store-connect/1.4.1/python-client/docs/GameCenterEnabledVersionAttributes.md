# GameCenterEnabledVersionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_asset** | [**ImageAsset**](ImageAsset.md) |  | [optional] 
**platform** | [**Platform**](Platform.md) |  | [optional] 
**version_string** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.game_center_enabled_version_attributes import GameCenterEnabledVersionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GameCenterEnabledVersionAttributes from a JSON string
game_center_enabled_version_attributes_instance = GameCenterEnabledVersionAttributes.from_json(json)
# print the JSON string representation of the object
print(GameCenterEnabledVersionAttributes.to_json())

# convert the object into a dict
game_center_enabled_version_attributes_dict = game_center_enabled_version_attributes_instance.to_dict()
# create an instance of GameCenterEnabledVersionAttributes from a dict
game_center_enabled_version_attributes_from_dict = GameCenterEnabledVersionAttributes.from_dict(game_center_enabled_version_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


