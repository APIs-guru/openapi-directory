# NetworkConfig

Network describes the network configuration for a `WorkerPool`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peered_network** | **str** | Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to &#x60;WorkerPool.project_id&#x60; on the service producer network. Must be in the format &#x60;projects/{project}/global/networks/{network}&#x60;, where &#x60;{project}&#x60; is a project number, such as &#x60;12345&#x60;, and &#x60;{network}&#x60; is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options) | [optional] 

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


