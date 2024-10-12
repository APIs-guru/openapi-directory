# GetNetworkSensorAlertsOverviewByMetric200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts**](GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts.md) |  | [optional] 
**end_ts** | **datetime** | End of the timespan over which sensor alerts are counted | [optional] 
**start_ts** | **datetime** | Start of the timespan over which sensor alerts are counted | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_overview_by_metric200_response_inner import GetNetworkSensorAlertsOverviewByMetric200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsOverviewByMetric200ResponseInner from a JSON string
get_network_sensor_alerts_overview_by_metric200_response_inner_instance = GetNetworkSensorAlertsOverviewByMetric200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsOverviewByMetric200ResponseInner.to_json())

# convert the object into a dict
get_network_sensor_alerts_overview_by_metric200_response_inner_dict = get_network_sensor_alerts_overview_by_metric200_response_inner_instance.to_dict()
# create an instance of GetNetworkSensorAlertsOverviewByMetric200ResponseInner from a dict
get_network_sensor_alerts_overview_by_metric200_response_inner_from_dict = GetNetworkSensorAlertsOverviewByMetric200ResponseInner.from_dict(get_network_sensor_alerts_overview_by_metric200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


