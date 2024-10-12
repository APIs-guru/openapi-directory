# InboundNATPool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_port** | **int** | This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400. | 
**frontend_port_range_end** | **int** | Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400. | 
**frontend_port_range_start** | **int** | Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400. | 
**name** | **str** | The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400. | 
**network_security_group_rules** | [**List[NetworkSecurityGroupRule]**](NetworkSecurityGroupRule.md) | The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. | [optional] 
**protocol** | [**InboundEndpointProtocol**](InboundEndpointProtocol.md) |  | 

## Example

```python
from openapi_client.models.inbound_nat_pool import InboundNATPool

# TODO update the JSON string below
json = "{}"
# create an instance of InboundNATPool from a JSON string
inbound_nat_pool_instance = InboundNATPool.from_json(json)
# print the JSON string representation of the object
print(InboundNATPool.to_json())

# convert the object into a dict
inbound_nat_pool_dict = inbound_nat_pool_instance.to_dict()
# create an instance of InboundNATPool from a dict
inbound_nat_pool_from_dict = InboundNATPool.from_dict(inbound_nat_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


