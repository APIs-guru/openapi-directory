# LocalNetworkResourceProperties

Information about a Service Fabric container network local to a single Service Fabric cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_address_prefix** | **str** | Address space for a container network. This is expressed in CIDR notation. | [optional] 
**description** | **str** | User readable description of the network. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the network. | [optional] [readonly] 
**kind** | [**NetworkKind**](NetworkKind.md) |  | 
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.local_network_resource_properties import LocalNetworkResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNetworkResourceProperties from a JSON string
local_network_resource_properties_instance = LocalNetworkResourceProperties.from_json(json)
# print the JSON string representation of the object
print(LocalNetworkResourceProperties.to_json())

# convert the object into a dict
local_network_resource_properties_dict = local_network_resource_properties_instance.to_dict()
# create an instance of LocalNetworkResourceProperties from a dict
local_network_resource_properties_from_dict = LocalNetworkResourceProperties.from_dict(local_network_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


