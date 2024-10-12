# MarketChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**con** | **bool** | Conflated - have more than a single change been combined (or null if not conflated) | [optional] 
**id** | **str** | Market Id - the id of the market | [optional] 
**img** | **bool** | Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta) | [optional] 
**market_definition** | [**MarketDefinition**](MarketDefinition.md) |  | [optional] 
**rc** | [**List[RunnerChange]**](RunnerChange.md) | Runner Changes - a list of changes to runners (or null if un-changed) | [optional] 
**tv** | **float** | The total amount matched across the market. This value is truncated at 2dp (or null if un-changed) | [optional] 

## Example

```python
from openapi_client.models.market_change import MarketChange

# TODO update the JSON string below
json = "{}"
# create an instance of MarketChange from a JSON string
market_change_instance = MarketChange.from_json(json)
# print the JSON string representation of the object
print(MarketChange.to_json())

# convert the object into a dict
market_change_dict = market_change_instance.to_dict()
# create an instance of MarketChange from a dict
market_change_from_dict = MarketChange.from_dict(market_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


