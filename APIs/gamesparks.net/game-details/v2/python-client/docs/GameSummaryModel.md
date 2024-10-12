# GameSummaryModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_level_data** | **List[object]** |  | [optional] 
**log_level_summary** | [**List[LogLevelSummaryModel]**](LogLevelSummaryModel.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.game_summary_model import GameSummaryModel

# TODO update the JSON string below
json = "{}"
# create an instance of GameSummaryModel from a JSON string
game_summary_model_instance = GameSummaryModel.from_json(json)
# print the JSON string representation of the object
print(GameSummaryModel.to_json())

# convert the object into a dict
game_summary_model_dict = game_summary_model_instance.to_dict()
# create an instance of GameSummaryModel from a dict
game_summary_model_from_dict = GameSummaryModel.from_dict(game_summary_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


