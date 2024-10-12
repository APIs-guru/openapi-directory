# HybridRunbookWorkerGroupUpdateParameters

Parameters supplied to the update operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**RunAsCredentialAssociationProperty**](RunAsCredentialAssociationProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.hybrid_runbook_worker_group_update_parameters import HybridRunbookWorkerGroupUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HybridRunbookWorkerGroupUpdateParameters from a JSON string
hybrid_runbook_worker_group_update_parameters_instance = HybridRunbookWorkerGroupUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(HybridRunbookWorkerGroupUpdateParameters.to_json())

# convert the object into a dict
hybrid_runbook_worker_group_update_parameters_dict = hybrid_runbook_worker_group_update_parameters_instance.to_dict()
# create an instance of HybridRunbookWorkerGroupUpdateParameters from a dict
hybrid_runbook_worker_group_update_parameters_from_dict = HybridRunbookWorkerGroupUpdateParameters.from_dict(hybrid_runbook_worker_group_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


