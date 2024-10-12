# NetworkConfig

Network describes the network configuration for a `WorkerPool`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peered_network** | **str** | Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to WorkerPool.project_id on the default network. Must be in the format &#x60;projects/{project}/global/networks/{network}&#x60;, where {project} is a project number, such as &#x60;12345&#x60;, and {network} is the name of a VPC network in the project. | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


