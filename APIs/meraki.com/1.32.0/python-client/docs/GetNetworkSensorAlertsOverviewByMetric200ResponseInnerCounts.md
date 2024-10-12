# GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts

Counts of sensor alerts over the timespan, by reading metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**door** | **int** | Number of sensor alerts that occurred due to an open door | [optional] 
**humidity** | **int** | Number of sensor alerts that occurred due to humidity readings | [optional] 
**indoor_air_quality** | **int** | Number of sensor alerts that occurred due to indoor air quality readings | [optional] 
**noise** | [**GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCountsNoise**](GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCountsNoise.md) |  | [optional] 
**pm25** | **int** | Number of sensor alerts that occurred due to PM2.5 readings | [optional] 
**temperature** | **int** | Number of sensor alerts that occurred due to temperature readings | [optional] 
**tvoc** | **int** | Number of sensor alerts that occurred due to TVOC readings | [optional] 
**water** | **int** | Number of sensor alerts that occurred due to the presence of water | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_overview_by_metric200_response_inner_counts import GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts from a JSON string
get_network_sensor_alerts_overview_by_metric200_response_inner_counts_instance = GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts.to_json())

# convert the object into a dict
get_network_sensor_alerts_overview_by_metric200_response_inner_counts_dict = get_network_sensor_alerts_overview_by_metric200_response_inner_counts_instance.to_dict()
# create an instance of GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts from a dict
get_network_sensor_alerts_overview_by_metric200_response_inner_counts_from_dict = GetNetworkSensorAlertsOverviewByMetric200ResponseInnerCounts.from_dict(get_network_sensor_alerts_overview_by_metric200_response_inner_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


