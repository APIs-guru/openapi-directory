# NodeLabels

Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Map of node label keys and node label values. | [optional] 

## Example

```python
from openapi_client.models.node_labels import NodeLabels

# TODO update the JSON string below
json = "{}"
# create an instance of NodeLabels from a JSON string
node_labels_instance = NodeLabels.from_json(json)
# print the JSON string representation of the object
print(NodeLabels.to_json())

# convert the object into a dict
node_labels_dict = node_labels_instance.to_dict()
# create an instance of NodeLabels from a dict
node_labels_from_dict = NodeLabels.from_dict(node_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


