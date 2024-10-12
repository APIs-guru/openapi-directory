# ReconciliationOperationMetadata

Operation metadata returned by the CLH during resource state reconciliation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_resource** | **bool** | DEPRECATED. Use exclusive_action instead. | [optional] 
**exclusive_action** | **str** | Excluisive action returned by the CLH. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_operation_metadata import ReconciliationOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationOperationMetadata from a JSON string
reconciliation_operation_metadata_instance = ReconciliationOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ReconciliationOperationMetadata.to_json())

# convert the object into a dict
reconciliation_operation_metadata_dict = reconciliation_operation_metadata_instance.to_dict()
# create an instance of ReconciliationOperationMetadata from a dict
reconciliation_operation_metadata_from_dict = ReconciliationOperationMetadata.from_dict(reconciliation_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


