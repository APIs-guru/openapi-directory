# TcpCheck

Information required for a TCP Uptime check request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ping_config** | [**PingConfig**](PingConfig.md) |  | [optional] 
**port** | **int** | The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required. | [optional] 

## Example

```python
from openapi_client.models.tcp_check import TcpCheck

# TODO update the JSON string below
json = "{}"
# create an instance of TcpCheck from a JSON string
tcp_check_instance = TcpCheck.from_json(json)
# print the JSON string representation of the object
print(TcpCheck.to_json())

# convert the object into a dict
tcp_check_dict = tcp_check_instance.to_dict()
# create an instance of TcpCheck from a dict
tcp_check_from_dict = TcpCheck.from_dict(tcp_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


