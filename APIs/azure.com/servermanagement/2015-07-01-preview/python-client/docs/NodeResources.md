# NodeResources

A collection of node resource objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[NodeResource]**](NodeResource.md) | Collection of Node Resources. | [optional] 

## Example

```python
from openapi_client.models.node_resources import NodeResources

# TODO update the JSON string below
json = "{}"
# create an instance of NodeResources from a JSON string
node_resources_instance = NodeResources.from_json(json)
# print the JSON string representation of the object
print(NodeResources.to_json())

# convert the object into a dict
node_resources_dict = node_resources_instance.to_dict()
# create an instance of NodeResources from a dict
node_resources_from_dict = NodeResources.from_dict(node_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


