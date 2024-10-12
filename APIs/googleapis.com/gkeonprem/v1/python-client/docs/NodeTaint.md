# NodeTaint

NodeTaint applied to every Kubernetes node in a node pool. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. Node taints are permanent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | **str** | The taint effect. | [optional] 
**key** | **str** | Key associated with the effect. | [optional] 
**value** | **str** | Value associated with the effect. | [optional] 

## Example

```python
from openapi_client.models.node_taint import NodeTaint

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTaint from a JSON string
node_taint_instance = NodeTaint.from_json(json)
# print the JSON string representation of the object
print(NodeTaint.to_json())

# convert the object into a dict
node_taint_dict = node_taint_instance.to_dict()
# create an instance of NodeTaint from a dict
node_taint_from_dict = NodeTaint.from_dict(node_taint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


