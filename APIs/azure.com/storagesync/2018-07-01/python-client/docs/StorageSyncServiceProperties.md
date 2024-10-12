# StorageSyncServiceProperties

Storage Sync Service Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_sync_service_status** | **int** | Storage Sync service status. | [optional] [readonly] 
**storage_sync_service_uid** | **str** | Storage Sync service Uid | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_sync_service_properties import StorageSyncServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncServiceProperties from a JSON string
storage_sync_service_properties_instance = StorageSyncServiceProperties.from_json(json)
# print the JSON string representation of the object
print(StorageSyncServiceProperties.to_json())

# convert the object into a dict
storage_sync_service_properties_dict = storage_sync_service_properties_instance.to_dict()
# create an instance of StorageSyncServiceProperties from a dict
storage_sync_service_properties_from_dict = StorageSyncServiceProperties.from_dict(storage_sync_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


