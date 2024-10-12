# RepricerStrategyType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment_type** | **str** |  | [optional] 
**adjustment_value** | **float** |  | [optional] 
**strategy_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.repricer_strategy_type import RepricerStrategyType

# TODO update the JSON string below
json = "{}"
# create an instance of RepricerStrategyType from a JSON string
repricer_strategy_type_instance = RepricerStrategyType.from_json(json)
# print the JSON string representation of the object
print(RepricerStrategyType.to_json())

# convert the object into a dict
repricer_strategy_type_dict = repricer_strategy_type_instance.to_dict()
# create an instance of RepricerStrategyType from a dict
repricer_strategy_type_from_dict = RepricerStrategyType.from_dict(repricer_strategy_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


