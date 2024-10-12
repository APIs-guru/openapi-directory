# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient

Ambient noise threshold. One of 'level' or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **int** | Alerting threshold as adjusted decibels. | [optional] 
**quality** | **str** | Alerting threshold as a qualitative ambient noise level. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdNoiseAmbient.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_noise_ambient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


