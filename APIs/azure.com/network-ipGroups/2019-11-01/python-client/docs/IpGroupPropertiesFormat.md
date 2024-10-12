# IpGroupPropertiesFormat

The IpGroups property information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firewalls** | [**List[IpGroupPropertiesFormatFirewallsInner]**](IpGroupPropertiesFormatFirewallsInner.md) | List of references to Azure resources that this IpGroups is associated with. | [optional] [readonly] 
**ip_addresses** | **List[str]** | IpAddresses/IpAddressPrefixes in the IpGroups resource. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ip_group_properties_format import IpGroupPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroupPropertiesFormat from a JSON string
ip_group_properties_format_instance = IpGroupPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(IpGroupPropertiesFormat.to_json())

# convert the object into a dict
ip_group_properties_format_dict = ip_group_properties_format_instance.to_dict()
# create an instance of IpGroupPropertiesFormat from a dict
ip_group_properties_format_from_dict = IpGroupPropertiesFormat.from_dict(ip_group_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


