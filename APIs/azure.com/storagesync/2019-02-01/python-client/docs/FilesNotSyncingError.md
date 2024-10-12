# FilesNotSyncingError

Files not syncing error object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | Error code (HResult) | [optional] [readonly] 
**persistent_count** | **int** | Count of persistent files not syncing with the specified error code | [optional] [readonly] 
**transient_count** | **int** | Count of transient files not syncing with the specified error code | [optional] [readonly] 

## Example

```python
from openapi_client.models.files_not_syncing_error import FilesNotSyncingError

# TODO update the JSON string below
json = "{}"
# create an instance of FilesNotSyncingError from a JSON string
files_not_syncing_error_instance = FilesNotSyncingError.from_json(json)
# print the JSON string representation of the object
print(FilesNotSyncingError.to_json())

# convert the object into a dict
files_not_syncing_error_dict = files_not_syncing_error_instance.to_dict()
# create an instance of FilesNotSyncingError from a dict
files_not_syncing_error_from_dict = FilesNotSyncingError.from_dict(files_not_syncing_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


