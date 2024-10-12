# PoolEndpointConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_nat_pools** | [**List[InboundNATPool]**](InboundNATPool.md) | The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. | 

## Example

```python
from openapi_client.models.pool_endpoint_configuration import PoolEndpointConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PoolEndpointConfiguration from a JSON string
pool_endpoint_configuration_instance = PoolEndpointConfiguration.from_json(json)
# print the JSON string representation of the object
print(PoolEndpointConfiguration.to_json())

# convert the object into a dict
pool_endpoint_configuration_dict = pool_endpoint_configuration_instance.to_dict()
# create an instance of PoolEndpointConfiguration from a dict
pool_endpoint_configuration_from_dict = PoolEndpointConfiguration.from_dict(pool_endpoint_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


