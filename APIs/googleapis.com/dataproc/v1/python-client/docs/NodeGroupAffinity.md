# NodeGroupAffinity

Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_group_uri** | **str** | Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1 | [optional] 

## Example

```python
from openapi_client.models.node_group_affinity import NodeGroupAffinity

# TODO update the JSON string below
json = "{}"
# create an instance of NodeGroupAffinity from a JSON string
node_group_affinity_instance = NodeGroupAffinity.from_json(json)
# print the JSON string representation of the object
print(NodeGroupAffinity.to_json())

# convert the object into a dict
node_group_affinity_dict = node_group_affinity_instance.to_dict()
# create an instance of NodeGroupAffinity from a dict
node_group_affinity_from_dict = NodeGroupAffinity.from_dict(node_group_affinity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


