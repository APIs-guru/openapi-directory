# VpnLinkProviderProperties

List of properties of a link provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_provider_name** | **str** | Name of the link provider. | [optional] 
**link_speed_in_mbps** | **int** | Link speed. | [optional] 

## Example

```python
from openapi_client.models.vpn_link_provider_properties import VpnLinkProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VpnLinkProviderProperties from a JSON string
vpn_link_provider_properties_instance = VpnLinkProviderProperties.from_json(json)
# print the JSON string representation of the object
print(VpnLinkProviderProperties.to_json())

# convert the object into a dict
vpn_link_provider_properties_dict = vpn_link_provider_properties_instance.to_dict()
# create an instance of VpnLinkProviderProperties from a dict
vpn_link_provider_properties_from_dict = VpnLinkProviderProperties.from_dict(vpn_link_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


