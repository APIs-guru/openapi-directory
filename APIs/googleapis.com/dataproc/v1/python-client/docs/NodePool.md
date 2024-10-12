# NodePool

indicating a list of workers of same type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id. | [optional] 
**instance_names** | **List[str]** | Name of instances to be repaired. These instances must belong to specified node pool. | [optional] 
**repair_action** | **str** | Required. Repair action to take on specified resources of the node pool. | [optional] 

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


