# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature

Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celsius** | **float** | Alerting threshold in degrees Celsius. | [optional] 
**fahrenheit** | **float** | Alerting threshold in degrees Fahrenheit. | [optional] 
**quality** | **str** | Alerting threshold as a qualitative temperature level. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTemperature.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_temperature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


