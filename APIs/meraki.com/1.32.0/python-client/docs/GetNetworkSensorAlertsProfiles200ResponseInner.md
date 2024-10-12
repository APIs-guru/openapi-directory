# GetNetworkSensorAlertsProfiles200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner]**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.md) | List of conditions that will cause the profile to send an alert. | 
**name** | **str** | Name of the sensor alert profile. | [optional] 
**profile_id** | **str** | ID of the sensor alert profile. | [optional] 
**recipients** | [**GetNetworkSensorAlertsProfiles200ResponseInnerRecipients**](GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.md) |  | [optional] 
**schedule** | [**GetNetworkSensorAlertsProfiles200ResponseInnerSchedule**](GetNetworkSensorAlertsProfiles200ResponseInnerSchedule.md) |  | [optional] 
**serials** | **List[str]** | List of device serials assigned to this sensor alert profile. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInner from a JSON string
get_network_sensor_alerts_profiles200_response_inner_instance = GetNetworkSensorAlertsProfiles200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInner.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_dict = get_network_sensor_alerts_profiles200_response_inner_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInner from a dict
get_network_sensor_alerts_profiles200_response_inner_from_dict = GetNetworkSensorAlertsProfiles200ResponseInner.from_dict(get_network_sensor_alerts_profiles200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


