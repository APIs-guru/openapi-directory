# MarketSubscriptionMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clk** | **str** | Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription | [optional] 
**conflate_ms** | **int** | Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000) | [optional] 
**heartbeat_ms** | **int** | Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000) | [optional] 
**initial_clk** | **str** | Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription | [optional] 
**market_data_filter** | [**MarketDataFilter**](MarketDataFilter.md) |  | [optional] 
**market_filter** | [**MarketFilter**](MarketFilter.md) |  | [optional] 
**segmentation_enabled** | **bool** | Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block | [optional] 

## Example

```python
from openapi_client.models.market_subscription_message import MarketSubscriptionMessage

# TODO update the JSON string below
json = "{}"
# create an instance of MarketSubscriptionMessage from a JSON string
market_subscription_message_instance = MarketSubscriptionMessage.from_json(json)
# print the JSON string representation of the object
print(MarketSubscriptionMessage.to_json())

# convert the object into a dict
market_subscription_message_dict = market_subscription_message_instance.to_dict()
# create an instance of MarketSubscriptionMessage from a dict
market_subscription_message_from_dict = MarketSubscriptionMessage.from_dict(market_subscription_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


