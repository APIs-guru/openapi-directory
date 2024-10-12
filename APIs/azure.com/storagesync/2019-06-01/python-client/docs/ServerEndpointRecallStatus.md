# ServerEndpointRecallStatus

Server endpoint recall status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_timestamp** | **datetime** | Last updated timestamp | [optional] [readonly] 
**recall_errors** | [**List[ServerEndpointRecallError]**](ServerEndpointRecallError.md) | Array of recall errors | [optional] [readonly] 
**total_recall_errors_count** | **int** | Total count of recall errors. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_recall_status import ServerEndpointRecallStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointRecallStatus from a JSON string
server_endpoint_recall_status_instance = ServerEndpointRecallStatus.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointRecallStatus.to_json())

# convert the object into a dict
server_endpoint_recall_status_dict = server_endpoint_recall_status_instance.to_dict()
# create an instance of ServerEndpointRecallStatus from a dict
server_endpoint_recall_status_from_dict = ServerEndpointRecallStatus.from_dict(server_endpoint_recall_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


