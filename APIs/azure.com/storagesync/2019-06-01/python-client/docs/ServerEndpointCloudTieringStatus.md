# ServerEndpointCloudTieringStatus

Server endpoint cloud tiering status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health** | [**ServerEndpointCloudTieringHealthState**](ServerEndpointCloudTieringHealthState.md) |  | [optional] 
**last_cloud_tiering_result** | **int** | Last cloud tiering result (HResult) | [optional] [readonly] 
**last_success_timestamp** | **datetime** | Last cloud tiering success timestamp | [optional] [readonly] 
**last_updated_timestamp** | **datetime** | Last updated timestamp | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_cloud_tiering_status import ServerEndpointCloudTieringStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointCloudTieringStatus from a JSON string
server_endpoint_cloud_tiering_status_instance = ServerEndpointCloudTieringStatus.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointCloudTieringStatus.to_json())

# convert the object into a dict
server_endpoint_cloud_tiering_status_dict = server_endpoint_cloud_tiering_status_instance.to_dict()
# create an instance of ServerEndpointCloudTieringStatus from a dict
server_endpoint_cloud_tiering_status_from_dict = ServerEndpointCloudTieringStatus.from_dict(server_endpoint_cloud_tiering_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


