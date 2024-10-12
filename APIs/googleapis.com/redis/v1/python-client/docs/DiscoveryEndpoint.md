# DiscoveryEndpoint

Endpoints on each network, for Redis clients to connect to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Output only. Address of the exposed Redis endpoint used by clients to connect to the service. The address could be either IP or hostname. | [optional] [readonly] 
**port** | **int** | Output only. The port number of the exposed Redis endpoint. | [optional] [readonly] 
**psc_config** | [**PscConfig**](PscConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovery_endpoint import DiscoveryEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryEndpoint from a JSON string
discovery_endpoint_instance = DiscoveryEndpoint.from_json(json)
# print the JSON string representation of the object
print(DiscoveryEndpoint.to_json())

# convert the object into a dict
discovery_endpoint_dict = discovery_endpoint_instance.to_dict()
# create an instance of DiscoveryEndpoint from a dict
discovery_endpoint_from_dict = DiscoveryEndpoint.from_dict(discovery_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


