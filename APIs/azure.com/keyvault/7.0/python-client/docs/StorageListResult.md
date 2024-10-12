# StorageListResult

The storage accounts list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of storage accounts. | [optional] [readonly] 
**value** | [**List[StorageAccountItem]**](StorageAccountItem.md) | A response message containing a list of storage accounts in the key vault along with a link to the next page of storage accounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_list_result import StorageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageListResult from a JSON string
storage_list_result_instance = StorageListResult.from_json(json)
# print the JSON string representation of the object
print(StorageListResult.to_json())

# convert the object into a dict
storage_list_result_dict = storage_list_result_instance.to_dict()
# create an instance of StorageListResult from a dict
storage_list_result_from_dict = StorageListResult.from_dict(storage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


