# NodeAffinity

Specifies the NodeAffinity key, values, and affinity operator according to [shared sole tenant node group affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for NodeAffinity. | [optional] 
**operator** | **str** | Operator for NodeAffinity. | [optional] 
**values** | **List[str]** | Values for NodeAffinity. | [optional] 

## Example

```python
from openapi_client.models.node_affinity import NodeAffinity

# TODO update the JSON string below
json = "{}"
# create an instance of NodeAffinity from a JSON string
node_affinity_instance = NodeAffinity.from_json(json)
# print the JSON string representation of the object
print(NodeAffinity.to_json())

# convert the object into a dict
node_affinity_dict = node_affinity_instance.to_dict()
# create an instance of NodeAffinity from a dict
node_affinity_from_dict = NodeAffinity.from_dict(node_affinity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


