# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold

Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**door** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdDoor**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdDoor.md) |  | [optional] 
**humidity** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity.md) |  | [optional] 
**indoor_air_quality** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality.md) |  | [optional] 
**noise** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoise**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoise.md) |  | [optional] 
**pm25** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25.md) |  | [optional] 
**temperature** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature.md) |  | [optional] 
**tvoc** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc.md) |  | [optional] 
**water** | [**GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdWater**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdWater.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThreshold.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


