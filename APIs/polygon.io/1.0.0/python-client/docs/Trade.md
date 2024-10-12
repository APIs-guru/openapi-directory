# Trade


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**c1** | **int** | Condition 1 of this trade | [optional] 
**c2** | **int** | Condition 2 of this trade | [optional] 
**c3** | **int** | Condition 3 of this trade | [optional] 
**c4** | **int** | Condition 4 of this trade | [optional] 
**e** | **str** | The exchange this trade happened on | [optional] 
**p** | **float** | Price of this trade | [optional] 
**s** | **int** | Size of the trade | [optional] 
**t** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.trade import Trade

# TODO update the JSON string below
json = "{}"
# create an instance of Trade from a JSON string
trade_instance = Trade.from_json(json)
# print the JSON string representation of the object
print(Trade.to_json())

# convert the object into a dict
trade_dict = trade_instance.to_dict()
# create an instance of Trade from a dict
trade_from_dict = Trade.from_dict(trade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


