# UpdateNetworkSensorAlertsProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner]**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.md) | List of conditions that will cause the profile to send an alert. | [optional] 
**name** | **str** | Name of the sensor alert profile. | [optional] 
**recipients** | [**GetNetworkSensorAlertsProfiles200ResponseInnerRecipients**](GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.md) |  | [optional] 
**schedule** | [**CreateNetworkSensorAlertsProfileRequestSchedule**](CreateNetworkSensorAlertsProfileRequestSchedule.md) |  | [optional] 
**serials** | **List[str]** | List of device serials assigned to this sensor alert profile. | [optional] 

## Example

```python
from openapi_client.models.update_network_sensor_alerts_profile_request import UpdateNetworkSensorAlertsProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSensorAlertsProfileRequest from a JSON string
update_network_sensor_alerts_profile_request_instance = UpdateNetworkSensorAlertsProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSensorAlertsProfileRequest.to_json())

# convert the object into a dict
update_network_sensor_alerts_profile_request_dict = update_network_sensor_alerts_profile_request_instance.to_dict()
# create an instance of UpdateNetworkSensorAlertsProfileRequest from a dict
update_network_sensor_alerts_profile_request_from_dict = UpdateNetworkSensorAlertsProfileRequest.from_dict(update_network_sensor_alerts_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


