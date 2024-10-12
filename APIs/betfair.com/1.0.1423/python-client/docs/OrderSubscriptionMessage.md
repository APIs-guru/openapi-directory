# OrderSubscriptionMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clk** | **str** | Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription | [optional] 
**conflate_ms** | **int** | Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000) | [optional] 
**heartbeat_ms** | **int** | Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000) | [optional] 
**initial_clk** | **str** | Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription | [optional] 
**order_filter** | [**OrderFilter**](OrderFilter.md) |  | [optional] 
**segmentation_enabled** | **bool** | Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block | [optional] 

## Example

```python
from openapi_client.models.order_subscription_message import OrderSubscriptionMessage

# TODO update the JSON string below
json = "{}"
# create an instance of OrderSubscriptionMessage from a JSON string
order_subscription_message_instance = OrderSubscriptionMessage.from_json(json)
# print the JSON string representation of the object
print(OrderSubscriptionMessage.to_json())

# convert the object into a dict
order_subscription_message_dict = order_subscription_message_instance.to_dict()
# create an instance of OrderSubscriptionMessage from a dict
order_subscription_message_from_dict = OrderSubscriptionMessage.from_dict(order_subscription_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


