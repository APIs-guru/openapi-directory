# GetNetworkApplianceSettings200ResponseDynamicDns

Dynamic DNS settings for a network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Dynamic DNS enabled | [optional] 
**prefix** | **str** | Dynamic DNS url prefix. DDNS must be enabled to update | [optional] 
**url** | **str** | Dynamic DNS url. DDNS must be enabled to update | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_settings200_response_dynamic_dns import GetNetworkApplianceSettings200ResponseDynamicDns

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSettings200ResponseDynamicDns from a JSON string
get_network_appliance_settings200_response_dynamic_dns_instance = GetNetworkApplianceSettings200ResponseDynamicDns.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSettings200ResponseDynamicDns.to_json())

# convert the object into a dict
get_network_appliance_settings200_response_dynamic_dns_dict = get_network_appliance_settings200_response_dynamic_dns_instance.to_dict()
# create an instance of GetNetworkApplianceSettings200ResponseDynamicDns from a dict
get_network_appliance_settings200_response_dynamic_dns_from_dict = GetNetworkApplianceSettings200ResponseDynamicDns.from_dict(get_network_appliance_settings200_response_dynamic_dns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


