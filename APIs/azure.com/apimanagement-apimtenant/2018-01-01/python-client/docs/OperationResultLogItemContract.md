# OperationResultLogItemContract

Log of the entity being created, updated or deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action like create/update/delete. | [optional] 
**object_key** | **str** | Identifier of the entity being created/updated/deleted. | [optional] 
**object_type** | **str** | The type of entity contract. | [optional] 

## Example

```python
from openapi_client.models.operation_result_log_item_contract import OperationResultLogItemContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultLogItemContract from a JSON string
operation_result_log_item_contract_instance = OperationResultLogItemContract.from_json(json)
# print the JSON string representation of the object
print(OperationResultLogItemContract.to_json())

# convert the object into a dict
operation_result_log_item_contract_dict = operation_result_log_item_contract_instance.to_dict()
# create an instance of OperationResultLogItemContract from a dict
operation_result_log_item_contract_from_dict = OperationResultLogItemContract.from_dict(operation_result_log_item_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


