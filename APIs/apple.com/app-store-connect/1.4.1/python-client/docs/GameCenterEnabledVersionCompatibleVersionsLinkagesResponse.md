# GameCenterEnabledVersionCompatibleVersionsLinkagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsGameCenterEnabledVersionsDataInner]**](AppRelationshipsGameCenterEnabledVersionsDataInner.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.game_center_enabled_version_compatible_versions_linkages_response import GameCenterEnabledVersionCompatibleVersionsLinkagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GameCenterEnabledVersionCompatibleVersionsLinkagesResponse from a JSON string
game_center_enabled_version_compatible_versions_linkages_response_instance = GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.from_json(json)
# print the JSON string representation of the object
print(GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.to_json())

# convert the object into a dict
game_center_enabled_version_compatible_versions_linkages_response_dict = game_center_enabled_version_compatible_versions_linkages_response_instance.to_dict()
# create an instance of GameCenterEnabledVersionCompatibleVersionsLinkagesResponse from a dict
game_center_enabled_version_compatible_versions_linkages_response_from_dict = GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.from_dict(game_center_enabled_version_compatible_versions_linkages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


