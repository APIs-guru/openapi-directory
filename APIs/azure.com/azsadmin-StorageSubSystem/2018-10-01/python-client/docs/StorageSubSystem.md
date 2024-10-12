# StorageSubSystem

Representation of a storage system resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageSubSystemModel**](StorageSubSystemModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_sub_system import StorageSubSystem

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSubSystem from a JSON string
storage_sub_system_instance = StorageSubSystem.from_json(json)
# print the JSON string representation of the object
print(StorageSubSystem.to_json())

# convert the object into a dict
storage_sub_system_dict = storage_sub_system_instance.to_dict()
# create an instance of StorageSubSystem from a dict
storage_sub_system_from_dict = StorageSubSystem.from_dict(storage_sub_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


