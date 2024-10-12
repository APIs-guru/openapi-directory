# CreateNetworkSensorAlertsProfileRequestSchedule

The sensor schedule to use with the alert profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times. | [optional] 

## Example

```python
from openapi_client.models.create_network_sensor_alerts_profile_request_schedule import CreateNetworkSensorAlertsProfileRequestSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSensorAlertsProfileRequestSchedule from a JSON string
create_network_sensor_alerts_profile_request_schedule_instance = CreateNetworkSensorAlertsProfileRequestSchedule.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSensorAlertsProfileRequestSchedule.to_json())

# convert the object into a dict
create_network_sensor_alerts_profile_request_schedule_dict = create_network_sensor_alerts_profile_request_schedule_instance.to_dict()
# create an instance of CreateNetworkSensorAlertsProfileRequestSchedule from a dict
create_network_sensor_alerts_profile_request_schedule_from_dict = CreateNetworkSensorAlertsProfileRequestSchedule.from_dict(create_network_sensor_alerts_profile_request_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


