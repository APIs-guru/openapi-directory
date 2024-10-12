# TrafficAnalyticsConfigurationProperties

Parameters that define the configuration of traffic analytics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Flag to enable/disable traffic analytics. | 
**traffic_analytics_interval** | **int** | The interval in minutes which would decide how frequently TA service should do flow analytics. | [optional] 
**workspace_id** | **str** | The resource guid of the attached workspace. | [optional] 
**workspace_region** | **str** | The location of the attached workspace. | [optional] 
**workspace_resource_id** | **str** | Resource Id of the attached workspace. | [optional] 

## Example

```python
from openapi_client.models.traffic_analytics_configuration_properties import TrafficAnalyticsConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficAnalyticsConfigurationProperties from a JSON string
traffic_analytics_configuration_properties_instance = TrafficAnalyticsConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(TrafficAnalyticsConfigurationProperties.to_json())

# convert the object into a dict
traffic_analytics_configuration_properties_dict = traffic_analytics_configuration_properties_instance.to_dict()
# create an instance of TrafficAnalyticsConfigurationProperties from a dict
traffic_analytics_configuration_properties_from_dict = TrafficAnalyticsConfigurationProperties.from_dict(traffic_analytics_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


