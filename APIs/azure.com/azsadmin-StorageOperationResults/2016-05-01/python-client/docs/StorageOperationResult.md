# StorageOperationResult

Storage operation result description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageOperationResultModel**](StorageOperationResultModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_operation_result import StorageOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageOperationResult from a JSON string
storage_operation_result_instance = StorageOperationResult.from_json(json)
# print the JSON string representation of the object
print(StorageOperationResult.to_json())

# convert the object into a dict
storage_operation_result_dict = storage_operation_result_instance.to_dict()
# create an instance of StorageOperationResult from a dict
storage_operation_result_from_dict = StorageOperationResult.from_dict(storage_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


