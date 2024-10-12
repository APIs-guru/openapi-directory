# GetNetworkSensorAlertsProfiles200ResponseInnerRecipients

List of recipients that will recieve the alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | A list of emails that will receive information about the alert. | [optional] 
**http_server_ids** | **List[str]** | A list of webhook endpoint IDs that will receive information about the alert. | [optional] 
**sms_numbers** | **List[str]** | A list of SMS numbers that will receive information about the alert. | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner_recipients import GetNetworkSensorAlertsProfiles200ResponseInnerRecipients

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerRecipients from a JSON string
get_network_sensor_alerts_profiles200_response_inner_recipients_instance = GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.to_json())

# convert the object into a dict
get_network_sensor_alerts_profiles200_response_inner_recipients_dict = get_network_sensor_alerts_profiles200_response_inner_recipients_instance.to_dict()
# create an instance of GetNetworkSensorAlertsProfiles200ResponseInnerRecipients from a dict
get_network_sensor_alerts_profiles200_response_inner_recipients_from_dict = GetNetworkSensorAlertsProfiles200ResponseInnerRecipients.from_dict(get_network_sensor_alerts_profiles200_response_inner_recipients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


