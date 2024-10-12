# GameCenterEnabledVersionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GameCenterEnabledVersion]**](GameCenterEnabledVersion.md) |  | 
**included** | [**List[GameCenterEnabledVersion]**](GameCenterEnabledVersion.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.game_center_enabled_versions_response import GameCenterEnabledVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameCenterEnabledVersionsResponse from a JSON string
game_center_enabled_versions_response_instance = GameCenterEnabledVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GameCenterEnabledVersionsResponse.to_json())

# convert the object into a dict
game_center_enabled_versions_response_dict = game_center_enabled_versions_response_instance.to_dict()
# create an instance of GameCenterEnabledVersionsResponse from a dict
game_center_enabled_versions_response_from_dict = GameCenterEnabledVersionsResponse.from_dict(game_center_enabled_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


