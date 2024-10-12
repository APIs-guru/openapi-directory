# DdosCustomPolicyPropertiesFormat

DDoS custom policy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol_custom_settings** | [**List[ProtocolCustomSettingsFormat]**](ProtocolCustomSettingsFormat.md) | The protocol-specific DDoS policy customization parameters. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**public_ip_addresses** | [**List[DdosCustomPolicyPropertiesFormatPublicIPAddressesInner]**](DdosCustomPolicyPropertiesFormatPublicIPAddressesInner.md) | The list of public IPs associated with the DDoS custom policy resource. This list is read-only. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ddos_custom_policy_properties_format import DdosCustomPolicyPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of DdosCustomPolicyPropertiesFormat from a JSON string
ddos_custom_policy_properties_format_instance = DdosCustomPolicyPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(DdosCustomPolicyPropertiesFormat.to_json())

# convert the object into a dict
ddos_custom_policy_properties_format_dict = ddos_custom_policy_properties_format_instance.to_dict()
# create an instance of DdosCustomPolicyPropertiesFormat from a dict
ddos_custom_policy_properties_format_from_dict = DdosCustomPolicyPropertiesFormat.from_dict(ddos_custom_policy_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


