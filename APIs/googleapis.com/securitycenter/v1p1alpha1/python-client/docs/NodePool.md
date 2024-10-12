# NodePool

Provides GKE node pool information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Kubernetes node pool name. | [optional] 
**nodes** | [**List[Node]**](Node.md) | Nodes associated with the finding. | [optional] 

## Example

```python
from openapi_client.models.node_pool import NodePool

# TODO update the JSON string below
json = "{}"
# create an instance of NodePool from a JSON string
node_pool_instance = NodePool.from_json(json)
# print the JSON string representation of the object
print(NodePool.to_json())

# convert the object into a dict
node_pool_dict = node_pool_instance.to_dict()
# create an instance of NodePool from a dict
node_pool_from_dict = NodePool.from_dict(node_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


