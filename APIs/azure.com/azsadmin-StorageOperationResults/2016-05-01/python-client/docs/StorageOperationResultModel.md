# StorageOperationResultModel

Storage operation result properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[str]** | List of operation result instances. | [optional] 
**provisioning_state** | **str** | Success or failure of operation. | [optional] 

## Example

```python
from openapi_client.models.storage_operation_result_model import StorageOperationResultModel

# TODO update the JSON string below
json = "{}"
# create an instance of StorageOperationResultModel from a JSON string
storage_operation_result_model_instance = StorageOperationResultModel.from_json(json)
# print the JSON string representation of the object
print(StorageOperationResultModel.to_json())

# convert the object into a dict
storage_operation_result_model_dict = storage_operation_result_model_instance.to_dict()
# create an instance of StorageOperationResultModel from a dict
storage_operation_result_model_from_dict = StorageOperationResultModel.from_dict(storage_operation_result_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


