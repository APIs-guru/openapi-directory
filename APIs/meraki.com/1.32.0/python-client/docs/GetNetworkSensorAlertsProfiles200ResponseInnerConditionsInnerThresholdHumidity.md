# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity

Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **str** | Alerting threshold as a qualitative humidity level. | [optional] 
**relative_percentage** | **int** | Alerting threshold in %RH. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdHumidity.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_humidity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


