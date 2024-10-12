# UpdateNetworkAlertSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[UpdateNetworkAlertSettingsRequestAlertsInner]**](UpdateNetworkAlertSettingsRequestAlertsInner.md) | Alert-specific configuration for each type. Only alerts that pertain to the network can be updated. | [optional] 
**default_destinations** | [**UpdateNetworkAlertSettingsRequestDefaultDestinations**](UpdateNetworkAlertSettingsRequestDefaultDestinations.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_alert_settings_request import UpdateNetworkAlertSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAlertSettingsRequest from a JSON string
update_network_alert_settings_request_instance = UpdateNetworkAlertSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAlertSettingsRequest.to_json())

# convert the object into a dict
update_network_alert_settings_request_dict = update_network_alert_settings_request_instance.to_dict()
# create an instance of UpdateNetworkAlertSettingsRequest from a dict
update_network_alert_settings_request_from_dict = UpdateNetworkAlertSettingsRequest.from_dict(update_network_alert_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


