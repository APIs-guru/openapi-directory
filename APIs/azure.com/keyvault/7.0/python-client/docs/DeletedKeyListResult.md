# DeletedKeyListResult

A list of keys that have been deleted in this vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted keys. | [optional] [readonly] 
**value** | [**List[DeletedKeyItem]**](DeletedKeyItem.md) | A response message containing a list of deleted keys in the vault along with a link to the next page of deleted keys | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_key_list_result import DeletedKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedKeyListResult from a JSON string
deleted_key_list_result_instance = DeletedKeyListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedKeyListResult.to_json())

# convert the object into a dict
deleted_key_list_result_dict = deleted_key_list_result_instance.to_dict()
# create an instance of DeletedKeyListResult from a dict
deleted_key_list_result_from_dict = DeletedKeyListResult.from_dict(deleted_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


