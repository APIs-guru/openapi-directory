# ServerEndpointFilesNotSyncingError

Files not syncing error object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** | Error code (HResult) | [optional] [readonly] 
**persistent_count** | **int** | Count of persistent files not syncing with the specified error code | [optional] [readonly] 
**transient_count** | **int** | Count of transient files not syncing with the specified error code | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_files_not_syncing_error import ServerEndpointFilesNotSyncingError

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointFilesNotSyncingError from a JSON string
server_endpoint_files_not_syncing_error_instance = ServerEndpointFilesNotSyncingError.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointFilesNotSyncingError.to_json())

# convert the object into a dict
server_endpoint_files_not_syncing_error_dict = server_endpoint_files_not_syncing_error_instance.to_dict()
# create an instance of ServerEndpointFilesNotSyncingError from a dict
server_endpoint_files_not_syncing_error_from_dict = ServerEndpointFilesNotSyncingError.from_dict(server_endpoint_files_not_syncing_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


