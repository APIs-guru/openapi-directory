# ServerEndpointProperties

ServerEndpoint Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_progress** | **int** | Bytes in progress | [optional] 
**byte_total** | **int** | Bytes total | [optional] 
**cloud_tiering** | [**FeatureStatus**](FeatureStatus.md) |  | [optional] 
**current_progress_type** | [**ProgressType**](ProgressType.md) |  | [optional] 
**friendly_name** | **str** | Friendly Name | [optional] 
**item_download_error_count** | **int** | Item download error count. | [optional] 
**item_progress_count** | **int** | Item Progress Count | [optional] 
**item_total_count** | **int** | Item Total Count | [optional] 
**item_upload_error_count** | **int** | Item Upload Error Count. | [optional] 
**last_sync_success** | **datetime** | Last Sync Success | [optional] 
**last_workflow_id** | **str** | ServerEndpoint lastWorkflowId | [optional] 
**provisioning_state** | **str** | ServerEndpoint Provisioning State | [optional] 
**server_local_path** | **str** | Server folder used for data synchronization | [optional] 
**server_resource_id** | **str** | Arm resource identifier. | [optional] 
**sync_error_context** | **str** | sync error context. | [optional] 
**sync_error_direction** | [**ProgressType**](ProgressType.md) |  | [optional] 
**sync_error_state** | **str** | Sync Error State | [optional] 
**sync_error_state_timestamp** | **datetime** | Sync Error State Timestamp | [optional] 
**total_progress** | **int** | Total progress | [optional] 
**volume_free_space_percent** | **int** | Level of free space to be maintained by Cloud Tiering if it is enabled. | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_properties import ServerEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointProperties from a JSON string
server_endpoint_properties_instance = ServerEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointProperties.to_json())

# convert the object into a dict
server_endpoint_properties_dict = server_endpoint_properties_instance.to_dict()
# create an instance of ServerEndpointProperties from a dict
server_endpoint_properties_from_dict = ServerEndpointProperties.from_dict(server_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


