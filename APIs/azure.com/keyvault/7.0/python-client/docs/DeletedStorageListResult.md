# DeletedStorageListResult

The deleted storage account list result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted storage accounts. | [optional] [readonly] 
**value** | [**List[DeletedStorageAccountItem]**](DeletedStorageAccountItem.md) | A response message containing a list of the deleted storage accounts in the vault along with a link to the next page of deleted storage accounts | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_storage_list_result import DeletedStorageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedStorageListResult from a JSON string
deleted_storage_list_result_instance = DeletedStorageListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedStorageListResult.to_json())

# convert the object into a dict
deleted_storage_list_result_dict = deleted_storage_list_result_instance.to_dict()
# create an instance of DeletedStorageListResult from a dict
deleted_storage_list_result_from_dict = DeletedStorageListResult.from_dict(deleted_storage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


