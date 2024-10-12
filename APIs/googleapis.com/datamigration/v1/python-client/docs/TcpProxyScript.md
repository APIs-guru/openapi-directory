# TcpProxyScript

Response message for 'GenerateTcpProxyScript' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **str** | The TCP Proxy configuration script. | [optional] 

## Example

```python
from openapi_client.models.tcp_proxy_script import TcpProxyScript

# TODO update the JSON string below
json = "{}"
# create an instance of TcpProxyScript from a JSON string
tcp_proxy_script_instance = TcpProxyScript.from_json(json)
# print the JSON string representation of the object
print(TcpProxyScript.to_json())

# convert the object into a dict
tcp_proxy_script_dict = tcp_proxy_script_instance.to_dict()
# create an instance of TcpProxyScript from a dict
tcp_proxy_script_from_dict = TcpProxyScript.from_dict(tcp_proxy_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


