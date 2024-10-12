# P2SVpnServerConfiguration

P2SVpnServerConfiguration Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**P2SVpnServerConfigurationProperties**](P2SVpnServerConfigurationProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_server_configuration import P2SVpnServerConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnServerConfiguration from a JSON string
p2_s_vpn_server_configuration_instance = P2SVpnServerConfiguration.from_json(json)
# print the JSON string representation of the object
print(P2SVpnServerConfiguration.to_json())

# convert the object into a dict
p2_s_vpn_server_configuration_dict = p2_s_vpn_server_configuration_instance.to_dict()
# create an instance of P2SVpnServerConfiguration from a dict
p2_s_vpn_server_configuration_from_dict = P2SVpnServerConfiguration.from_dict(p2_s_vpn_server_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


