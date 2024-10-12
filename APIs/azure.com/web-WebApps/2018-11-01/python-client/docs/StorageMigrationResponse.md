# StorageMigrationResponse

Response for a migration of app content request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | StorageMigrationResponse resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_migration_response import StorageMigrationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StorageMigrationResponse from a JSON string
storage_migration_response_instance = StorageMigrationResponse.from_json(json)
# print the JSON string representation of the object
print(StorageMigrationResponse.to_json())

# convert the object into a dict
storage_migration_response_dict = storage_migration_response_instance.to_dict()
# create an instance of StorageMigrationResponse from a dict
storage_migration_response_from_dict = StorageMigrationResponse.from_dict(storage_migration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


