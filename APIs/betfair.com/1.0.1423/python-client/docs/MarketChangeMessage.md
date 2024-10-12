# MarketChangeMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clk** | **str** | Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) | [optional] 
**conflate_ms** | **int** | Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed) | [optional] 
**ct** | **str** | Change Type - set to indicate the type of change - if null this is a delta) | [optional] 
**heartbeat_ms** | **int** | Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000) | [optional] 
**initial_clk** | **str** | Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect) | [optional] 
**mc** | [**List[MarketChange]**](MarketChange.md) | MarketChanges - the modifications to markets (will be null on a heartbeat | [optional] 
**pt** | **int** | Publish Time (in millis since epoch) that the changes were generated | [optional] 
**segment_type** | **str** | Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented | [optional] 
**status** | **int** | Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies | [optional] 

## Example

```python
from openapi_client.models.market_change_message import MarketChangeMessage

# TODO update the JSON string below
json = "{}"
# create an instance of MarketChangeMessage from a JSON string
market_change_message_instance = MarketChangeMessage.from_json(json)
# print the JSON string representation of the object
print(MarketChangeMessage.to_json())

# convert the object into a dict
market_change_message_dict = market_change_message_instance.to_dict()
# create an instance of MarketChangeMessage from a dict
market_change_message_from_dict = MarketChangeMessage.from_dict(market_change_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


