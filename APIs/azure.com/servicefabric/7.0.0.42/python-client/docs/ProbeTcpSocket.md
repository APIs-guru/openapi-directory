# ProbeTcpSocket

Tcp port to probe inside the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Port to access for probe. | 

## Example

```python
from openapi_client.models.probe_tcp_socket import ProbeTcpSocket

# TODO update the JSON string below
json = "{}"
# create an instance of ProbeTcpSocket from a JSON string
probe_tcp_socket_instance = ProbeTcpSocket.from_json(json)
# print the JSON string representation of the object
print(ProbeTcpSocket.to_json())

# convert the object into a dict
probe_tcp_socket_dict = probe_tcp_socket_instance.to_dict()
# create an instance of ProbeTcpSocket from a dict
probe_tcp_socket_from_dict = ProbeTcpSocket.from_dict(probe_tcp_socket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


