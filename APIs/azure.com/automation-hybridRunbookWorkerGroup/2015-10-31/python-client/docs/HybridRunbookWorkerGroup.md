# HybridRunbookWorkerGroup

Definition of hybrid runbook worker group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**RunAsCredentialAssociationProperty**](RunAsCredentialAssociationProperty.md) |  | [optional] 
**group_type** | **str** | Type of the HybridWorkerGroup. | [optional] 
**hybrid_runbook_workers** | [**List[HybridRunbookWorker]**](HybridRunbookWorker.md) | Gets or sets the list of hybrid runbook workers. | [optional] 
**id** | **str** | Gets or sets the id of the resource. | [optional] 
**name** | **str** | Gets or sets the name of the group. | [optional] 

## Example

```python
from openapi_client.models.hybrid_runbook_worker_group import HybridRunbookWorkerGroup

# TODO update the JSON string below
json = "{}"
# create an instance of HybridRunbookWorkerGroup from a JSON string
hybrid_runbook_worker_group_instance = HybridRunbookWorkerGroup.from_json(json)
# print the JSON string representation of the object
print(HybridRunbookWorkerGroup.to_json())

# convert the object into a dict
hybrid_runbook_worker_group_dict = hybrid_runbook_worker_group_instance.to_dict()
# create an instance of HybridRunbookWorkerGroup from a dict
hybrid_runbook_worker_group_from_dict = HybridRunbookWorkerGroup.from_dict(hybrid_runbook_worker_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


