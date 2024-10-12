# GetNetworkSensorAlertsProfiles200ResponseInnerSchedule

The sensor schedule to use with the alert profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times. | [optional] 
**name** | **str** | Name of the sensor schedule to use with the alert profile. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_schedule import GetNetworkSensorAlertsProfiles200ResponseInnerSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerSchedule from a JSON string
get_network_sensor_alerts_profiles200_response_inner_schedule_instance = GetNetworkSensorAlertsProfiles200ResponseInnerSchedule.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerSchedule.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_schedule_dict = get_network_sensor_alerts_profiles200_response_inner_schedule_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerSchedule from a dict
get_network_sensor_alerts_profiles200_response_inner_schedule_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerSchedule.from_dict(get_network_sensor_alerts_profiles200_response_inner_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


