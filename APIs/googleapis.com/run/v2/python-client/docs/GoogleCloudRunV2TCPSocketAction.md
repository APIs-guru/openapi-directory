# GoogleCloudRunV2TCPSocketAction

TCPSocketAction describes an action based on opening a socket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_tcp_socket_action import GoogleCloudRunV2TCPSocketAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2TCPSocketAction from a JSON string
google_cloud_run_v2_tcp_socket_action_instance = GoogleCloudRunV2TCPSocketAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2TCPSocketAction.to_json())

# convert the object into a dict
google_cloud_run_v2_tcp_socket_action_dict = google_cloud_run_v2_tcp_socket_action_instance.to_dict()
# create an instance of GoogleCloudRunV2TCPSocketAction from a dict
google_cloud_run_v2_tcp_socket_action_from_dict = GoogleCloudRunV2TCPSocketAction.from_dict(google_cloud_run_v2_tcp_socket_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


