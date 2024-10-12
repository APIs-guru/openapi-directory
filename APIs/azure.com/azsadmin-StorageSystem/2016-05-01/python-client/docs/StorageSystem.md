# StorageSystem

Representation of a storage system resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageSystemModel**](StorageSystemModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_system import StorageSystem

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSystem from a JSON string
storage_system_instance = StorageSystem.from_json(json)
# print the JSON string representation of the object
print(StorageSystem.to_json())

# convert the object into a dict
storage_system_dict = storage_system_instance.to_dict()
# create an instance of StorageSystem from a dict
storage_system_from_dict = StorageSystem.from_dict(storage_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


