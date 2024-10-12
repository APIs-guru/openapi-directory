# CloudControl2SharedOperationsReconciliationOperationMetadata

Operation metadata returned by the CLH during resource state reconciliation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_resource** | **bool** | DEPRECATED. Use exclusive_action instead. | [optional] 
**exclusive_action** | **str** | Excluisive action returned by the CLH. | [optional] 

## Example

```python
from openapi_client.models.cloud_control2_shared_operations_reconciliation_operation_metadata import CloudControl2SharedOperationsReconciliationOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudControl2SharedOperationsReconciliationOperationMetadata from a JSON string
cloud_control2_shared_operations_reconciliation_operation_metadata_instance = CloudControl2SharedOperationsReconciliationOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudControl2SharedOperationsReconciliationOperationMetadata.to_json())

# convert the object into a dict
cloud_control2_shared_operations_reconciliation_operation_metadata_dict = cloud_control2_shared_operations_reconciliation_operation_metadata_instance.to_dict()
# create an instance of CloudControl2SharedOperationsReconciliationOperationMetadata from a dict
cloud_control2_shared_operations_reconciliation_operation_metadata_from_dict = CloudControl2SharedOperationsReconciliationOperationMetadata.from_dict(cloud_control2_shared_operations_reconciliation_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


