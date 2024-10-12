# StorageTarget

A storage system being cached by a Cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Schema for the name of resources served by this provider.   Note that objects will contain an odata @id annotation as appropriate, this will contain the complete URL of the object.   These names are case-preserving, but not case sensitive. | [optional] 
**properties** | [**StorageTargetProperties**](StorageTargetProperties.md) |  | [optional] 
**type** | **str** | Type for the storage target; Microsoft.StorageCache/Cache/StorageTarget | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_target import StorageTarget

# TODO update the JSON string below
json = "{}"
# create an instance of StorageTarget from a JSON string
storage_target_instance = StorageTarget.from_json(json)
# print the JSON string representation of the object
print(StorageTarget.to_json())

# convert the object into a dict
storage_target_dict = storage_target_instance.to_dict()
# create an instance of StorageTarget from a dict
storage_target_from_dict = StorageTarget.from_dict(storage_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


