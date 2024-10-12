# LastTrade


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cond1** | **int** | Condition 1 of the trade | [optional] 
**cond2** | **int** | Condition 2 of the trade | [optional] 
**cond3** | **int** | Condition 3 of the trade | [optional] 
**cond4** | **int** | Condition 4 of the trade | [optional] 
**exchange** | **int** | Exchange this trade happened on | [optional] 
**price** | **float** | Price of the trade | [optional] 
**size** | **int** | Size of this trade | [optional] 
**timestamp** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.last_trade import LastTrade

# TODO update the JSON string below
json = "{}"
# create an instance of LastTrade from a JSON string
last_trade_instance = LastTrade.from_json(json)
# print the JSON string representation of the object
print(LastTrade.to_json())

# convert the object into a dict
last_trade_dict = last_trade_instance.to_dict()
# create an instance of LastTrade from a dict
last_trade_from_dict = LastTrade.from_dict(last_trade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


