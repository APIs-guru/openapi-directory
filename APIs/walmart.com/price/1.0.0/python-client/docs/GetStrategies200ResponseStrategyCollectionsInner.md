# GetStrategies200ResponseStrategyCollectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_count** | **int** |  | [optional] 
**enable_repricer_for_promotion** | **bool** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**repricer_strategy** | **str** |  | [optional] 
**strategies** | [**List[GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner]**](GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner.md) |  | [optional] 
**strategy_collection_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_strategies200_response_strategy_collections_inner import GetStrategies200ResponseStrategyCollectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetStrategies200ResponseStrategyCollectionsInner from a JSON string
get_strategies200_response_strategy_collections_inner_instance = GetStrategies200ResponseStrategyCollectionsInner.from_json(json)
# print the JSON string representation of the object
print(GetStrategies200ResponseStrategyCollectionsInner.to_json())

# convert the object into a dict
get_strategies200_response_strategy_collections_inner_dict = get_strategies200_response_strategy_collections_inner_instance.to_dict()
# create an instance of GetStrategies200ResponseStrategyCollectionsInner from a dict
get_strategies200_response_strategy_collections_inner_from_dict = GetStrategies200ResponseStrategyCollectionsInner.from_dict(get_strategies200_response_strategy_collections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


