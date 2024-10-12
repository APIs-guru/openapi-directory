# VirtualRouterPropertiesFormat

Virtual Router definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosted_gateway** | [**VirtualRouterPropertiesFormatHostedGateway**](VirtualRouterPropertiesFormatHostedGateway.md) |  | [optional] 
**hosted_subnet** | [**VirtualRouterPropertiesFormatHostedGateway**](VirtualRouterPropertiesFormatHostedGateway.md) |  | [optional] 
**peerings** | [**List[VirtualRouterPropertiesFormatHostedGateway]**](VirtualRouterPropertiesFormatHostedGateway.md) | List of references to VirtualRouterPeerings. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**virtual_router_asn** | **int** | VirtualRouter ASN. | [optional] 
**virtual_router_ips** | **List[str]** | VirtualRouter IPs. | [optional] 

## Example

```python
from openapi_client.models.virtual_router_properties_format import VirtualRouterPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouterPropertiesFormat from a JSON string
virtual_router_properties_format_instance = VirtualRouterPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualRouterPropertiesFormat.to_json())

# convert the object into a dict
virtual_router_properties_format_dict = virtual_router_properties_format_instance.to_dict()
# create an instance of VirtualRouterPropertiesFormat from a dict
virtual_router_properties_format_from_dict = VirtualRouterPropertiesFormat.from_dict(virtual_router_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


