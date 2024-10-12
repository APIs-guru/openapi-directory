# StorageOperationResultList

Pageable list of storage operation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[StorageOperationResult]**](StorageOperationResult.md) | List of storage operation results. | [optional] 

## Example

```python
from openapi_client.models.storage_operation_result_list import StorageOperationResultList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageOperationResultList from a JSON string
storage_operation_result_list_instance = StorageOperationResultList.from_json(json)
# print the JSON string representation of the object
print(StorageOperationResultList.to_json())

# convert the object into a dict
storage_operation_result_list_dict = storage_operation_result_list_instance.to_dict()
# create an instance of StorageOperationResultList from a dict
storage_operation_result_list_from_dict = StorageOperationResultList.from_dict(storage_operation_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


