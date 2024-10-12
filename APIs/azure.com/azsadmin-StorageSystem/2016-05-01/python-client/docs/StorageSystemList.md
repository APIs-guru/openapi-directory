# StorageSystemList

Pageable list of storage systems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[StorageSystem]**](StorageSystem.md) | List of storage systems. | [optional] 

## Example

```python
from openapi_client.models.storage_system_list import StorageSystemList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSystemList from a JSON string
storage_system_list_instance = StorageSystemList.from_json(json)
# print the JSON string representation of the object
print(StorageSystemList.to_json())

# convert the object into a dict
storage_system_list_dict = storage_system_list_instance.to_dict()
# create an instance of StorageSystemList from a dict
storage_system_list_from_dict = StorageSystemList.from_dict(storage_system_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


