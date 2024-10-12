# StorageSyncServiceUpdateParameters

Parameters for updating an Storage sync service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Storage Sync Service Update Properties object. | [optional] 
**tags** | **Dict[str, str]** | The user-specified tags associated with the storage sync service. | [optional] 

## Example

```python
from openapi_client.models.storage_sync_service_update_parameters import StorageSyncServiceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSyncServiceUpdateParameters from a JSON string
storage_sync_service_update_parameters_instance = StorageSyncServiceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageSyncServiceUpdateParameters.to_json())

# convert the object into a dict
storage_sync_service_update_parameters_dict = storage_sync_service_update_parameters_instance.to_dict()
# create an instance of StorageSyncServiceUpdateParameters from a dict
storage_sync_service_update_parameters_from_dict = StorageSyncServiceUpdateParameters.from_dict(storage_sync_service_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


