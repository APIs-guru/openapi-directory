# StorageSubSystemList

Pageable list of storage systems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[StorageSubSystem]**](StorageSubSystem.md) | List of storage systems. | [optional] 

## Example

```python
from openapi_client.models.storage_sub_system_list import StorageSubSystemList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSubSystemList from a JSON string
storage_sub_system_list_instance = StorageSubSystemList.from_json(json)
# print the JSON string representation of the object
print(StorageSubSystemList.to_json())

# convert the object into a dict
storage_sub_system_list_dict = storage_sub_system_list_instance.to_dict()
# create an instance of StorageSubSystemList from a dict
storage_sub_system_list_from_dict = StorageSubSystemList.from_dict(storage_sub_system_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


