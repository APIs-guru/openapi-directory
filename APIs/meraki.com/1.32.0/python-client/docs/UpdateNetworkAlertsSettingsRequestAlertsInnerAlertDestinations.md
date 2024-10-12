# UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations

A hash of destinations for this specific alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_admins** | **bool** | If true, then all network admins will receive emails for this alert | [optional] 
**emails** | **List[str]** | A list of emails that will receive information about the alert | [optional] 
**http_server_ids** | **List[str]** | A list of HTTP server IDs to send a Webhook to for this alert | [optional] 
**snmp** | **bool** | If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network | [optional] 

## Example

```python
from openapi_client.models.update_network_alerts_settings_request_alerts_inner_alert_destinations import UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations from a JSON string
update_network_alerts_settings_request_alerts_inner_alert_destinations_instance = UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations.to_json())

# convert the object into a dict
update_network_alerts_settings_request_alerts_inner_alert_destinations_dict = update_network_alerts_settings_request_alerts_inner_alert_destinations_instance.to_dict()
# create an instance of UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations from a dict
update_network_alerts_settings_request_alerts_inner_alert_destinations_from_dict = UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations.from_dict(update_network_alerts_settings_request_alerts_inner_alert_destinations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


