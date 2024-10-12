# MarketDataFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** |  | [optional] 
**ladder_levels** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.market_data_filter import MarketDataFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MarketDataFilter from a JSON string
market_data_filter_instance = MarketDataFilter.from_json(json)
# print the JSON string representation of the object
print(MarketDataFilter.to_json())

# convert the object into a dict
market_data_filter_dict = market_data_filter_instance.to_dict()
# create an instance of MarketDataFilter from a dict
market_data_filter_from_dict = MarketDataFilter.from_dict(market_data_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


