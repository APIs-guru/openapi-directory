# RollbackNodePoolUpgradeRequest

RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format &#x60;projects/*/locations/*/clusters/*/nodePools/*&#x60;. | [optional] 
**node_pool_id** | **str** | Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field. | [optional] 
**project_id** | **str** | Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**respect_pdb** | **bool** | Option for rollback to ignore the PodDisruptionBudget. Default value is false. | [optional] 
**zone** | **str** | Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.rollback_node_pool_upgrade_request import RollbackNodePoolUpgradeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackNodePoolUpgradeRequest from a JSON string
rollback_node_pool_upgrade_request_instance = RollbackNodePoolUpgradeRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackNodePoolUpgradeRequest.to_json())

# convert the object into a dict
rollback_node_pool_upgrade_request_dict = rollback_node_pool_upgrade_request_instance.to_dict()
# create an instance of RollbackNodePoolUpgradeRequest from a dict
rollback_node_pool_upgrade_request_from_dict = RollbackNodePoolUpgradeRequest.from_dict(rollback_node_pool_upgrade_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


