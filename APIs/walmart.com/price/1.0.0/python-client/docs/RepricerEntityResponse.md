# RepricerEntityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_repricer_for_promotion** | **bool** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**repricer_strategy** | **str** |  | [optional] 
**strategies** | [**List[GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner]**](GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner.md) |  | [optional] 
**strategy_collection_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.repricer_entity_response import RepricerEntityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepricerEntityResponse from a JSON string
repricer_entity_response_instance = RepricerEntityResponse.from_json(json)
# print the JSON string representation of the object
print(RepricerEntityResponse.to_json())

# convert the object into a dict
repricer_entity_response_dict = repricer_entity_response_instance.to_dict()
# create an instance of RepricerEntityResponse from a dict
repricer_entity_response_from_dict = RepricerEntityResponse.from_dict(repricer_entity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


