# MarketFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**betting_types** | **List[str]** |  | [optional] 
**bsp_market** | **bool** |  | [optional] 
**country_codes** | **List[str]** |  | [optional] 
**event_ids** | **List[str]** |  | [optional] 
**event_type_ids** | **List[str]** |  | [optional] 
**market_ids** | **List[str]** |  | [optional] 
**market_types** | **List[str]** |  | [optional] 
**race_types** | **List[str]** |  | [optional] 
**turn_in_play_enabled** | **bool** |  | [optional] 
**venues** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.market_filter import MarketFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MarketFilter from a JSON string
market_filter_instance = MarketFilter.from_json(json)
# print the JSON string representation of the object
print(MarketFilter.to_json())

# convert the object into a dict
market_filter_dict = market_filter_instance.to_dict()
# create an instance of MarketFilter from a dict
market_filter_from_dict = MarketFilter.from_dict(market_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


