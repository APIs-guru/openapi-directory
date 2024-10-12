# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | If &#39;above&#39;, an alert will be sent when a sensor reads above the threshold. If &#39;below&#39;, an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds. | [optional] 
**duration** | **int** | Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0. | [optional] [default to 0]
**metric** | **str** | The type of sensor metric that will be monitored for changes. Available metrics are door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | 
**threshold** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold.md) |  | 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


