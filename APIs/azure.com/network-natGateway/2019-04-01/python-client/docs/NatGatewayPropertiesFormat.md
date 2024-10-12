# NatGatewayPropertiesFormat

Nat Gateway properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_timeout_in_minutes** | **int** | The idle timeout of the nat gateway. | [optional] 
**provisioning_state** | **str** | The provisioning state of the NatGateway resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_addresses** | [**List[NatGatewayPropertiesFormatPublicIpAddressesInner]**](NatGatewayPropertiesFormatPublicIpAddressesInner.md) | An array of public ip addresses associated with the nat gateway resource. | [optional] 
**public_ip_prefixes** | [**List[NatGatewayPropertiesFormatPublicIpAddressesInner]**](NatGatewayPropertiesFormatPublicIpAddressesInner.md) | An array of public ip prefixes associated with the nat gateway resource. | [optional] 
**resource_guid** | **str** | The resource GUID property of the nat gateway resource. | [optional] 
**subnets** | [**List[NatGatewayPropertiesFormatPublicIpAddressesInner]**](NatGatewayPropertiesFormatPublicIpAddressesInner.md) | An array of references to the subnets using this nat gateway resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.nat_gateway_properties_format import NatGatewayPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NatGatewayPropertiesFormat from a JSON string
nat_gateway_properties_format_instance = NatGatewayPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NatGatewayPropertiesFormat.to_json())

# convert the object into a dict
nat_gateway_properties_format_dict = nat_gateway_properties_format_instance.to_dict()
# create an instance of NatGatewayPropertiesFormat from a dict
nat_gateway_properties_format_from_dict = NatGatewayPropertiesFormat.from_dict(nat_gateway_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


