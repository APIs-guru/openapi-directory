# RepricerEntityGetResponse


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
from openapi_client.models.repricer_entity_get_response import RepricerEntityGetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepricerEntityGetResponse from a JSON string
repricer_entity_get_response_instance = RepricerEntityGetResponse.from_json(json)
# print the JSON string representation of the object
print(RepricerEntityGetResponse.to_json())

# convert the object into a dict
repricer_entity_get_response_dict = repricer_entity_get_response_instance.to_dict()
# create an instance of RepricerEntityGetResponse from a dict
repricer_entity_get_response_from_dict = RepricerEntityGetResponse.from_dict(repricer_entity_get_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


