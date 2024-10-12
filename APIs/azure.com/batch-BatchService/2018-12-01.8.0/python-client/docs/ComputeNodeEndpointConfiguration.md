# ComputeNodeEndpointConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_endpoints** | [**List[InboundEndpoint]**](InboundEndpoint.md) |  | 

## Example

```python
from openapi_client.models.compute_node_endpoint_configuration import ComputeNodeEndpointConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeEndpointConfiguration from a JSON string
compute_node_endpoint_configuration_instance = ComputeNodeEndpointConfiguration.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeEndpointConfiguration.to_json())

# convert the object into a dict
compute_node_endpoint_configuration_dict = compute_node_endpoint_configuration_instance.to_dict()
# create an instance of ComputeNodeEndpointConfiguration from a dict
compute_node_endpoint_configuration_from_dict = ComputeNodeEndpointConfiguration.from_dict(compute_node_endpoint_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


