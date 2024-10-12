# InboundNatPoolPropertiesFormat

Properties of Inbound NAT pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_port** | **int** | Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to &#39;*&#39; to automatically assign an unallocated port that is discoverable using the runtime API | 
**frontend_ip_configuration** | [**SubResource**](SubResource.md) |  | [optional] 
**frontend_port_range_end** | **int** | Gets or sets the ending port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive | 
**frontend_port_range_start** | **int** | Gets or sets the starting port range for the NAT pool. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive | 
**protocol** | **str** | Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp | 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.inbound_nat_pool_properties_format import InboundNatPoolPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of InboundNatPoolPropertiesFormat from a JSON string
inbound_nat_pool_properties_format_instance = InboundNatPoolPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(InboundNatPoolPropertiesFormat.to_json())

# convert the object into a dict
inbound_nat_pool_properties_format_dict = inbound_nat_pool_properties_format_instance.to_dict()
# create an instance of InboundNatPoolPropertiesFormat from a dict
inbound_nat_pool_properties_format_from_dict = InboundNatPoolPropertiesFormat.from_dict(inbound_nat_pool_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


