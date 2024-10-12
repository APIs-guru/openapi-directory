# UpdateNetworkApplianceSettingsRequestDynamicDns

Dynamic DNS settings for a network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Dynamic DNS enabled | [optional] 
**prefix** | **str** | Dynamic DNS url prefix. DDNS must be enabled to update | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_settings_request_dynamic_dns import UpdateNetworkApplianceSettingsRequestDynamicDns

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSettingsRequestDynamicDns from a JSON string
update_network_appliance_settings_request_dynamic_dns_instance = UpdateNetworkApplianceSettingsRequestDynamicDns.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSettingsRequestDynamicDns.to_json())

# convert the object into a dict
update_network_appliance_settings_request_dynamic_dns_dict = update_network_appliance_settings_request_dynamic_dns_instance.to_dict()
# create an instance of UpdateNetworkApplianceSettingsRequestDynamicDns from a dict
update_network_appliance_settings_request_dynamic_dns_from_dict = UpdateNetworkApplianceSettingsRequestDynamicDns.from_dict(update_network_appliance_settings_request_dynamic_dns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


