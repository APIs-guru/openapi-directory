# CreateNetworkSensorAlertsProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner]**](GetNetworkSensorAlertsProfiles200ResponseInnerConditionsInner.md) | List of conditions that will cause the profile to send an alert. | 
**name** | **str** | Name of the sensor alert profile. | 
**recipients** | [**GetNetworkSensorAlertsProfiles200ResponseInnerRecipients**](GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.md) |  | [optional] 
**schedule** | [**CreateNetworkSensorAlertsProfileRequestSchedule**](CreateNetworkSensorAlertsProfileRequestSchedule.md) |  | [optional] 
**serials** | **List[str]** | List of device serials assigned to this sensor alert profile. | [optional] 

## Example

```python
from openapi_client.models.create_network_sensor_alerts_profile_request import CreateNetworkSensorAlertsProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSensorAlertsProfileRequest from a JSON string
create_network_sensor_alerts_profile_request_instance = CreateNetworkSensorAlertsProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSensorAlertsProfileRequest.to_json())

# convert the object into a dict
create_network_sensor_alerts_profile_request_dict = create_network_sensor_alerts_profile_request_instance.to_dict()
# create an instance of CreateNetworkSensorAlertsProfileRequest from a dict
create_network_sensor_alerts_profile_request_from_dict = CreateNetworkSensorAlertsProfileRequest.from_dict(create_network_sensor_alerts_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


