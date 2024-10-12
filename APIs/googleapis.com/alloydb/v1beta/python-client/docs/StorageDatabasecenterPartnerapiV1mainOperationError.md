# StorageDatabasecenterPartnerapiV1mainOperationError

An error that occurred during a backup creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Identifies the specific error that occurred. REQUIRED | [optional] 
**error_type** | **str** |  | [optional] 
**message** | **str** | Additional information about the error encountered. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_operation_error import StorageDatabasecenterPartnerapiV1mainOperationError

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainOperationError from a JSON string
storage_databasecenter_partnerapi_v1main_operation_error_instance = StorageDatabasecenterPartnerapiV1mainOperationError.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainOperationError.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_operation_error_dict = storage_databasecenter_partnerapi_v1main_operation_error_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainOperationError from a dict
storage_databasecenter_partnerapi_v1main_operation_error_from_dict = StorageDatabasecenterPartnerapiV1mainOperationError.from_dict(storage_databasecenter_partnerapi_v1main_operation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


