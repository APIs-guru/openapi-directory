# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality

Indoor air quality score threshold. One of 'score' or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Alerting threshold as a qualitative indoor air quality level. | [optional] 
**score** | **int** | Alerting threshold as indoor air quality score. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdIndoorAirQuality.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_indoor_air_quality_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


