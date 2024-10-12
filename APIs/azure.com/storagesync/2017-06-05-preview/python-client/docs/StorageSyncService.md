# StorageSyncService

Storage Sync Service object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | [optional] 
**tags** | **object** | The tags of the resource. | [optional] 
**id** | **str** | The id of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource | [optional] [readonly] 
**properties** | [**StorageSyncServiceProperties**](StorageSyncServiceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_sync_service import StorageSyncService

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncService from a JSON string
storage_sync_service_instance = StorageSyncService.from_json(json)
# print the JSON string representation of the object
print(StorageSyncService.to_json())

# convert the object into a dict
storage_sync_service_dict = storage_sync_service_instance.to_dict()
# create an instance of StorageSyncService from a dict
storage_sync_service_from_dict = StorageSyncService.from_dict(storage_sync_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


