# ServerEndpointHealth

ServerEndpoint Health object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_health** | [**HealthState**](HealthState.md) |  | [optional] 
**current_progress** | [**SyncProgressStatus**](SyncProgressStatus.md) |  | [optional] 
**download_health** | [**HealthState**](HealthState.md) |  | [optional] 
**download_status** | [**SyncSessionStatus**](SyncSessionStatus.md) |  | [optional] 
**last_updated_timestamp** | **datetime** | Last Updated Timestamp | [optional] 
**offline_data_transfer_status** | [**OfflineDataTransferState**](OfflineDataTransferState.md) |  | [optional] 
**upload_health** | [**HealthState**](HealthState.md) |  | [optional] 
**upload_status** | [**SyncSessionStatus**](SyncSessionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_health import ServerEndpointHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointHealth from a JSON string
server_endpoint_health_instance = ServerEndpointHealth.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointHealth.to_json())

# convert the object into a dict
server_endpoint_health_dict = server_endpoint_health_instance.to_dict()
# create an instance of ServerEndpointHealth from a dict
server_endpoint_health_from_dict = ServerEndpointHealth.from_dict(server_endpoint_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


