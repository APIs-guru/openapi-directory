# ProxyConnectionInfo

For display only. Metadata associated with ProxyConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_uri** | **str** | URI of the network where connection is proxied. | [optional] 
**new_destination_ip** | **str** | Destination IP address of a new connection. | [optional] 
**new_destination_port** | **int** | Destination port of a new connection. Only valid when protocol is TCP or UDP. | [optional] 
**new_source_ip** | **str** | Source IP address of a new connection. | [optional] 
**new_source_port** | **int** | Source port of a new connection. Only valid when protocol is TCP or UDP. | [optional] 
**old_destination_ip** | **str** | Destination IP address of an original connection | [optional] 
**old_destination_port** | **int** | Destination port of an original connection. Only valid when protocol is TCP or UDP. | [optional] 
**old_source_ip** | **str** | Source IP address of an original connection. | [optional] 
**old_source_port** | **int** | Source port of an original connection. Only valid when protocol is TCP or UDP. | [optional] 
**protocol** | **str** | IP protocol in string format, for example: \&quot;TCP\&quot;, \&quot;UDP\&quot;, \&quot;ICMP\&quot;. | [optional] 
**subnet_uri** | **str** | Uri of proxy subnet. | [optional] 

## Example

```python
from openapi_client.models.proxy_connection_info import ProxyConnectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyConnectionInfo from a JSON string
proxy_connection_info_instance = ProxyConnectionInfo.from_json(json)
# print the JSON string representation of the object
print(ProxyConnectionInfo.to_json())

# convert the object into a dict
proxy_connection_info_dict = proxy_connection_info_instance.to_dict()
# create an instance of ProxyConnectionInfo from a dict
proxy_connection_info_from_dict = ProxyConnectionInfo.from_dict(proxy_connection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


