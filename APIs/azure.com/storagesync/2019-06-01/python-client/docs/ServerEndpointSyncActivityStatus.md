# ServerEndpointSyncActivityStatus

Sync Session status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_bytes** | **int** | Applied bytes | [optional] [readonly] 
**applied_item_count** | **int** | Applied item count. | [optional] [readonly] 
**per_item_error_count** | **int** | Per item error count | [optional] [readonly] 
**timestamp** | **datetime** | Timestamp when properties were updated | [optional] [readonly] 
**total_bytes** | **int** | Total bytes (if available) | [optional] [readonly] 
**total_item_count** | **int** | Total item count (if available) | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_sync_activity_status import ServerEndpointSyncActivityStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointSyncActivityStatus from a JSON string
server_endpoint_sync_activity_status_instance = ServerEndpointSyncActivityStatus.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointSyncActivityStatus.to_json())

# convert the object into a dict
server_endpoint_sync_activity_status_dict = server_endpoint_sync_activity_status_instance.to_dict()
# create an instance of ServerEndpointSyncActivityStatus from a dict
server_endpoint_sync_activity_status_from_dict = ServerEndpointSyncActivityStatus.from_dict(server_endpoint_sync_activity_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


