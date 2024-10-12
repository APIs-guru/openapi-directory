# IntegrationRuntimeNodesGetIpAddress200Response

The IP address of self-hosted integration runtime node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address of self-hosted integration runtime node. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_runtime_nodes_get_ip_address200_response import IntegrationRuntimeNodesGetIpAddress200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeNodesGetIpAddress200Response from a JSON string
integration_runtime_nodes_get_ip_address200_response_instance = IntegrationRuntimeNodesGetIpAddress200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeNodesGetIpAddress200Response.to_json())

# convert the object into a dict
integration_runtime_nodes_get_ip_address200_response_dict = integration_runtime_nodes_get_ip_address200_response_instance.to_dict()
# create an instance of IntegrationRuntimeNodesGetIpAddress200Response from a dict
integration_runtime_nodes_get_ip_address200_response_from_dict = IntegrationRuntimeNodesGetIpAddress200Response.from_dict(integration_runtime_nodes_get_ip_address200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


