# GetNetworkApplianceSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tracking_method** | **str** | Client tracking method of a network | [optional] 
**deployment_mode** | **str** | Deployment mode of a network | [optional] 
**dynamic_dns** | [**GetNetworkApplianceSettings200ResponseDynamicDns**](GetNetworkApplianceSettings200ResponseDynamicDns.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_settings200_response import GetNetworkApplianceSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSettings200Response from a JSON string
get_network_appliance_settings200_response_instance = GetNetworkApplianceSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSettings200Response.to_json())

# convert the object into a dict
get_network_appliance_settings200_response_dict = get_network_appliance_settings200_response_instance.to_dict()
# create an instance of GetNetworkApplianceSettings200Response from a dict
get_network_appliance_settings200_response_from_dict = GetNetworkApplianceSettings200Response.from_dict(get_network_appliance_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


