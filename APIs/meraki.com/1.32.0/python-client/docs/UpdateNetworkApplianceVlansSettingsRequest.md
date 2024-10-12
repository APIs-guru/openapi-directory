# UpdateNetworkApplianceVlansSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlans_enabled** | **bool** | Boolean indicating whether to enable (true) or disable (false) VLANs for the network | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vlans_settings_request import UpdateNetworkApplianceVlansSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVlansSettingsRequest from a JSON string
update_network_appliance_vlans_settings_request_instance = UpdateNetworkApplianceVlansSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVlansSettingsRequest.to_json())

# convert the object into a dict
update_network_appliance_vlans_settings_request_dict = update_network_appliance_vlans_settings_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceVlansSettingsRequest from a dict
update_network_appliance_vlans_settings_request_from_dict = UpdateNetworkApplianceVlansSettingsRequest.from_dict(update_network_appliance_vlans_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


