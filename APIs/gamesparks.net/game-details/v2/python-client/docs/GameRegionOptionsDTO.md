# GameRegionOptionsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** |  | [optional] 
**options** | [**List[GameRegionOptionDTO]**](GameRegionOptionDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.game_region_options_dto import GameRegionOptionsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GameRegionOptionsDTO from a JSON string
game_region_options_dto_instance = GameRegionOptionsDTO.from_json(json)
# print the JSON string representation of the object
print(GameRegionOptionsDTO.to_json())

# convert the object into a dict
game_region_options_dto_dict = game_region_options_dto_instance.to_dict()
# create an instance of GameRegionOptionsDTO from a dict
game_region_options_dto_from_dict = GameRegionOptionsDTO.from_dict(game_region_options_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


