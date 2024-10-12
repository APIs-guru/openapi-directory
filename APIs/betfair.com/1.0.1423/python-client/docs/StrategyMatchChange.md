# StrategyMatchChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mb** | **List[List[float]]** | Matched Backs - matched amounts by distinct matched price on the Back side for this strategy | [optional] 
**ml** | **List[List[float]]** | Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy | [optional] 

## Example

```python
from openapi_client.models.strategy_match_change import StrategyMatchChange

# TODO update the JSON string below
json = "{}"
# create an instance of StrategyMatchChange from a JSON string
strategy_match_change_instance = StrategyMatchChange.from_json(json)
# print the JSON string representation of the object
print(StrategyMatchChange.to_json())

# convert the object into a dict
strategy_match_change_dict = strategy_match_change_instance.to_dict()
# create an instance of StrategyMatchChange from a dict
strategy_match_change_from_dict = StrategyMatchChange.from_dict(strategy_match_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


