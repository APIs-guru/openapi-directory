# GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc

TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentration** | **int** | Alerting threshold as TVOC micrograms per cubic meter. | [optional] 
**quality** | **str** | Alerting threshold as a qualitative TVOC level. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc import GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc from a JSON string
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc_instance = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc_dict = get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc from a dict
get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInnerThresholdTvoc.from_dict(get_network_sensor_alerts_profiles200_response_inner_conditions_inner_threshold_tvoc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


