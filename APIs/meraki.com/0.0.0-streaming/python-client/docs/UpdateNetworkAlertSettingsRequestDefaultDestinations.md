# UpdateNetworkAlertSettingsRequestDefaultDestinations

The network-wide destinations for all alerts on the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_admins** | **bool** | If true, then all network admins will receive emails. | [optional] 
**emails** | **List[str]** | A list of emails that will recieve the alert(s). | [optional] 
**http_server_ids** | **List[str]** | A list of HTTP server IDs to send a Webhook to | [optional] 
**snmp** | **bool** | If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network. | [optional] 

## Example

```python
from openapi_client.models.update_network_alert_settings_request_default_destinations import UpdateNetworkAlertSettingsRequestDefaultDestinations

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAlertSettingsRequestDefaultDestinations from a JSON string
update_network_alert_settings_request_default_destinations_instance = UpdateNetworkAlertSettingsRequestDefaultDestinations.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAlertSettingsRequestDefaultDestinations.to_json())

# convert the object into a dict
update_network_alert_settings_request_default_destinations_dict = update_network_alert_settings_request_default_destinations_instance.to_dict()
# create an instance of UpdateNetworkAlertSettingsRequestDefaultDestinations from a dict
update_network_alert_settings_request_default_destinations_from_dict = UpdateNetworkAlertSettingsRequestDefaultDestinations.from_dict(update_network_alert_settings_request_default_destinations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


