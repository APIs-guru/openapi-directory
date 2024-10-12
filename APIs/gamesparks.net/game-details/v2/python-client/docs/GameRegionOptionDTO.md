# GameRegionOptionDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_code** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 
**selected** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.game_region_option_dto import GameRegionOptionDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GameRegionOptionDTO from a JSON string
game_region_option_dto_instance = GameRegionOptionDTO.from_json(json)
# print the JSON string representation of the object
print(GameRegionOptionDTO.to_json())

# convert the object into a dict
game_region_option_dto_dict = game_region_option_dto_instance.to_dict()
# create an instance of GameRegionOptionDTO from a dict
game_region_option_dto_from_dict = GameRegionOptionDTO.from_dict(game_region_option_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


