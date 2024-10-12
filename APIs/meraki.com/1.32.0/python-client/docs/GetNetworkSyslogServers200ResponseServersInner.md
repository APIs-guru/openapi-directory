# GetNetworkSyslogServers200ResponseServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The IP address of the syslog server | [optional] 
**port** | **int** | The port of the syslog server | [optional] 
**roles** | **List[str]** | A list of roles for the syslog server. Options (case-insensitive): &#39;Wireless event log&#39;, &#39;Appliance event log&#39;, &#39;Switch event log&#39;, &#39;Air Marshal events&#39;, &#39;Flows&#39;, &#39;URLs&#39;, &#39;IDS alerts&#39;, &#39;Security events&#39; | [optional] 

## Example

```python
from openapi_client.models.get_network_syslog_servers200_response_servers_inner import GetNetworkSyslogServers200ResponseServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSyslogServers200ResponseServersInner from a JSON string
get_network_syslog_servers200_response_servers_inner_instance = GetNetworkSyslogServers200ResponseServersInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSyslogServers200ResponseServersInner.to_json())

# convert the object into a dict
get_network_syslog_servers200_response_servers_inner_dict = get_network_syslog_servers200_response_servers_inner_instance.to_dict()
# create an instance of GetNetworkSyslogServers200ResponseServersInner from a dict
get_network_syslog_servers200_response_servers_inner_from_dict = GetNetworkSyslogServers200ResponseServersInner.from_dict(get_network_syslog_servers200_response_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


