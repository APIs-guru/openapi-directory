# BestEffortProvisioning

Best effort provisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes | [optional] 
**min_provision_nodes** | **int** | Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved. | [optional] 

## Example

```python
from openapi_client.models.best_effort_provisioning import BestEffortProvisioning

# TODO update the JSON string below
json = "{}"
# create an instance of BestEffortProvisioning from a JSON string
best_effort_provisioning_instance = BestEffortProvisioning.from_json(json)
# print the JSON string representation of the object
print(BestEffortProvisioning.to_json())

# convert the object into a dict
best_effort_provisioning_dict = best_effort_provisioning_instance.to_dict()
# create an instance of BestEffortProvisioning from a dict
best_effort_provisioning_from_dict = BestEffortProvisioning.from_dict(best_effort_provisioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


