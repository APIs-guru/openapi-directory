# GatewayProperties

Describes properties of a gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User readable description of the gateway. | [optional] 
**destination_network** | [**NetworkRef**](NetworkRef.md) |  | 
**http** | [**List[HttpConfig]**](HttpConfig.md) | Configuration for http connectivity for this gateway. | [optional] 
**ip_address** | **str** | IP address of the gateway. This is populated in the response and is ignored for incoming requests. | [optional] [readonly] 
**source_network** | [**NetworkRef**](NetworkRef.md) |  | 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the gateway. | [optional] [readonly] 
**tcp** | [**List[TcpConfig]**](TcpConfig.md) | Configuration for tcp connectivity for this gateway. | [optional] 

## Example

```python
from openapi_client.models.gateway_properties import GatewayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayProperties from a JSON string
gateway_properties_instance = GatewayProperties.from_json(json)
# print the JSON string representation of the object
print(GatewayProperties.to_json())

# convert the object into a dict
gateway_properties_dict = gateway_properties_instance.to_dict()
# create an instance of GatewayProperties from a dict
gateway_properties_from_dict = GatewayProperties.from_dict(gateway_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


