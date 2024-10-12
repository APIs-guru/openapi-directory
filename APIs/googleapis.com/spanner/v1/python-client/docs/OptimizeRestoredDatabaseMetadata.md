# OptimizeRestoredDatabaseMetadata

Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the restored database being optimized. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 

## Example

```python
from openapi_client.models.optimize_restored_database_metadata import OptimizeRestoredDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OptimizeRestoredDatabaseMetadata from a JSON string
optimize_restored_database_metadata_instance = OptimizeRestoredDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(OptimizeRestoredDatabaseMetadata.to_json())

# convert the object into a dict
optimize_restored_database_metadata_dict = optimize_restored_database_metadata_instance.to_dict()
# create an instance of OptimizeRestoredDatabaseMetadata from a dict
optimize_restored_database_metadata_from_dict = OptimizeRestoredDatabaseMetadata.from_dict(optimize_restored_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


