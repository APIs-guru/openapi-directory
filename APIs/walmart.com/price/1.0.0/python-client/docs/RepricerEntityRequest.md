# RepricerEntityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_repricer_for_promotion** | **bool** | Status of item on promotions to be enable on repricer | [optional] 
**enabled** | **bool** | Status of the Strategy Collection | [optional] 
**repricer_strategy** | **str** | Name of the Strategy Collection | [optional] 
**strategies** | [**List[GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner]**](GetStrategies200ResponseStrategyCollectionsInnerStrategiesInner.md) | Strategies | [optional] 

## Example

```python
from openapi_client.models.repricer_entity_request import RepricerEntityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepricerEntityRequest from a JSON string
repricer_entity_request_instance = RepricerEntityRequest.from_json(json)
# print the JSON string representation of the object
print(RepricerEntityRequest.to_json())

# convert the object into a dict
repricer_entity_request_dict = repricer_entity_request_instance.to_dict()
# create an instance of RepricerEntityRequest from a dict
repricer_entity_request_from_dict = RepricerEntityRequest.from_dict(repricer_entity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


