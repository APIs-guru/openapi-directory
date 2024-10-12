# RepricerEntityCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy_collections** | [**List[GetStrategies200ResponseStrategyCollectionsInner]**](GetStrategies200ResponseStrategyCollectionsInner.md) |  | [optional] 
**total_elements** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.repricer_entity_collection_response import RepricerEntityCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepricerEntityCollectionResponse from a JSON string
repricer_entity_collection_response_instance = RepricerEntityCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(RepricerEntityCollectionResponse.to_json())

# convert the object into a dict
repricer_entity_collection_response_dict = repricer_entity_collection_response_instance.to_dict()
# create an instance of RepricerEntityCollectionResponse from a dict
repricer_entity_collection_response_from_dict = RepricerEntityCollectionResponse.from_dict(repricer_entity_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


