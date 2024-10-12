# IntegrationRuntimesRemoveNodeRequest

Request to remove a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_name** | **str** | The name of the node to be removed. | [optional] 

## Example

```python
from openapi_client.models.integration_runtimes_remove_node_request import IntegrationRuntimesRemoveNodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimesRemoveNodeRequest from a JSON string
integration_runtimes_remove_node_request_instance = IntegrationRuntimesRemoveNodeRequest.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimesRemoveNodeRequest.to_json())

# convert the object into a dict
integration_runtimes_remove_node_request_dict = integration_runtimes_remove_node_request_instance.to_dict()
# create an instance of IntegrationRuntimesRemoveNodeRequest from a dict
integration_runtimes_remove_node_request_from_dict = IntegrationRuntimesRemoveNodeRequest.from_dict(integration_runtimes_remove_node_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


