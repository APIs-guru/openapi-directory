# UpdateNetworkAlertsSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[UpdateNetworkAlertsSettingsRequestAlertsInner]**](UpdateNetworkAlertsSettingsRequestAlertsInner.md) | Alert-specific configuration for each type. Only alerts that pertain to the network can be updated. | [optional] 
**default_destinations** | [**UpdateNetworkAlertsSettingsRequestDefaultDestinations**](UpdateNetworkAlertsSettingsRequestDefaultDestinations.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_alerts_settings_request import UpdateNetworkAlertsSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAlertsSettingsRequest from a JSON string
update_network_alerts_settings_request_instance = UpdateNetworkAlertsSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAlertsSettingsRequest.to_json())

# convert the object into a dict
update_network_alerts_settings_request_dict = update_network_alerts_settings_request_instance.to_dict()
# create an instance of UpdateNetworkAlertsSettingsRequest from a dict
update_network_alerts_settings_request_from_dict = UpdateNetworkAlertsSettingsRequest.from_dict(update_network_alerts_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


