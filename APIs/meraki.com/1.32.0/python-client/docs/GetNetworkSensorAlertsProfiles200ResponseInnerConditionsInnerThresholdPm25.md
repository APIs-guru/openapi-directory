# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25

PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentration** | **int** | Alerting threshold as PM2.5 parts per million. | [optional] 
**quality** | **str** | Alerting threshold as a qualitative PM2.5 level. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25 import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25 from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25 from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdPm25.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_pm25_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


