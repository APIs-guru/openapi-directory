# TrafficPercentStrategy

Strategy that specifies how clients of Google Service Controller want to send traffic to use different config versions. This is generally used by API proxy to split traffic based on your configured percentage for each config version. One example of how to gradually rollout a new service configuration using this strategy: Day 1 Rollout { id: \"example.googleapis.com/rollout_20160206\" traffic_percent_strategy { percentages: { \"example.googleapis.com/20160201\": 70.00 \"example.googleapis.com/20160206\": 30.00 } } } Day 2 Rollout { id: \"example.googleapis.com/rollout_20160207\" traffic_percent_strategy: { percentages: { \"example.googleapis.com/20160206\": 100.00 } } }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentages** | **Dict[str, float]** | Maps service configuration IDs to their corresponding traffic percentage. Key is the service configuration ID, Value is the traffic percentage which must be greater than 0.0 and the sum must equal to 100.0. | [optional] 

## Example

```python
from openapi_client.models.traffic_percent_strategy import TrafficPercentStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficPercentStrategy from a JSON string
traffic_percent_strategy_instance = TrafficPercentStrategy.from_json(json)
# print the JSON string representation of the object
print(TrafficPercentStrategy.to_json())

# convert the object into a dict
traffic_percent_strategy_dict = traffic_percent_strategy_instance.to_dict()
# create an instance of TrafficPercentStrategy from a dict
traffic_percent_strategy_from_dict = TrafficPercentStrategy.from_dict(traffic_percent_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


