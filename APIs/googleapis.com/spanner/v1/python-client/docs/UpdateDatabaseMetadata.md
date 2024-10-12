# UpdateDatabaseMetadata

Metadata type for the operation returned by UpdateDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is best-effort). | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**request** | [**UpdateDatabaseRequest**](UpdateDatabaseRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_database_metadata import UpdateDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDatabaseMetadata from a JSON string
update_database_metadata_instance = UpdateDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateDatabaseMetadata.to_json())

# convert the object into a dict
update_database_metadata_dict = update_database_metadata_instance.to_dict()
# create an instance of UpdateDatabaseMetadata from a dict
update_database_metadata_from_dict = UpdateDatabaseMetadata.from_dict(update_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


