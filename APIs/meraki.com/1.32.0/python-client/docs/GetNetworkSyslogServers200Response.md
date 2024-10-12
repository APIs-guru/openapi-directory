# GetNetworkSyslogServers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | [**List[GetNetworkSyslogServers200ResponseServersInner]**](GetNetworkSyslogServers200ResponseServersInner.md) | List of the syslog servers for this network | [optional] 

## Example

```python
from openapi_client.models.get_network_syslog_servers200_response import GetNetworkSyslogServers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSyslogServers200Response from a JSON string
get_network_syslog_servers200_response_instance = GetNetworkSyslogServers200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSyslogServers200Response.to_json())

# convert the object into a dict
get_network_syslog_servers200_response_dict = get_network_syslog_servers200_response_instance.to_dict()
# create an instance of GetNetworkSyslogServers200Response from a dict
get_network_syslog_servers200_response_from_dict = GetNetworkSyslogServers200Response.from_dict(get_network_syslog_servers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


