# LastForexTrade


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **int** | Exchange this trade happened on | [optional] 
**price** | **float** | Price of the trade | [optional] 
**timestamp** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.last_forex_trade import LastForexTrade

# TODO update the JSON string below
json = "{}"
# create an instance of LastForexTrade from a JSON string
last_forex_trade_instance = LastForexTrade.from_json(json)
# print the JSON string representation of the object
print(LastForexTrade.to_json())

# convert the object into a dict
last_forex_trade_dict = last_forex_trade_instance.to_dict()
# create an instance of LastForexTrade from a dict
last_forex_trade_from_dict = LastForexTrade.from_dict(last_forex_trade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


