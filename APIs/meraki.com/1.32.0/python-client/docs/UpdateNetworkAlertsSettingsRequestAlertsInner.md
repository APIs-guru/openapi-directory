# UpdateNetworkAlertsSettingsRequestAlertsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_destinations** | [**UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations**](UpdateNetworkAlertsSettingsRequestAlertsInnerAlertDestinations.md) |  | [optional] 
**enabled** | **bool** | A boolean depicting if the alert is turned on or off | [optional] 
**filters** | **object** | A hash of specific configuration data for the alert. Only filters specific to the alert will be updated. | [optional] 
**type** | **str** | The type of alert | 

## Example

```python
from openapi_client.models.update_network_alerts_settings_request_alerts_inner import UpdateNetworkAlertsSettingsRequestAlertsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAlertsSettingsRequestAlertsInner from a JSON string
update_network_alerts_settings_request_alerts_inner_instance = UpdateNetworkAlertsSettingsRequestAlertsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAlertsSettingsRequestAlertsInner.to_json())

# convert the object into a dict
update_network_alerts_settings_request_alerts_inner_dict = update_network_alerts_settings_request_alerts_inner_instance.to_dict()
# create an instance of UpdateNetworkAlertsSettingsRequestAlertsInner from a dict
update_network_alerts_settings_request_alerts_inner_from_dict = UpdateNetworkAlertsSettingsRequestAlertsInner.from_dict(update_network_alerts_settings_request_alerts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


