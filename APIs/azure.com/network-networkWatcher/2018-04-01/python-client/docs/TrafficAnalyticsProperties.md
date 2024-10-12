# TrafficAnalyticsProperties

Parameters that define the configuration of traffic analytics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_watcher_flow_analytics_configuration** | [**TrafficAnalyticsConfigurationProperties**](TrafficAnalyticsConfigurationProperties.md) |  | 

## Example

```python
from openapi_client.models.traffic_analytics_properties import TrafficAnalyticsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficAnalyticsProperties from a JSON string
traffic_analytics_properties_instance = TrafficAnalyticsProperties.from_json(json)
# print the JSON string representation of the object
print(TrafficAnalyticsProperties.to_json())

# convert the object into a dict
traffic_analytics_properties_dict = traffic_analytics_properties_instance.to_dict()
# create an instance of TrafficAnalyticsProperties from a dict
traffic_analytics_properties_from_dict = TrafficAnalyticsProperties.from_dict(traffic_analytics_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


