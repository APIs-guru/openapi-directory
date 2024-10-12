# GameEndpointsModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_elastic_search** | **str** |  | [optional] 
**live_nosql** | **str** |  | [optional] 
**preview_elastic_search** | **str** |  | [optional] 
**preview_nosql** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.game_endpoints_model import GameEndpointsModel

# TODO update the JSON string below
json = "{}"
# create an instance of GameEndpointsModel from a JSON string
game_endpoints_model_instance = GameEndpointsModel.from_json(json)
# print the JSON string representation of the object
print(GameEndpointsModel.to_json())

# convert the object into a dict
game_endpoints_model_dict = game_endpoints_model_instance.to_dict()
# create an instance of GameEndpointsModel from a dict
game_endpoints_model_from_dict = GameEndpointsModel.from_dict(game_endpoints_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


