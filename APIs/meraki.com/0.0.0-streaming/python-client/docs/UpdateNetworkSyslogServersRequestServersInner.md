# UpdateNetworkSyslogServersRequestServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The IP address of the syslog server | 
**port** | **int** | The port of the syslog server | 
**roles** | **List[str]** | A list of roles for the syslog server. Options (case-insensitive): &#39;Wireless event log&#39;, &#39;Appliance event log&#39;, &#39;Switch event log&#39;, &#39;Air Marshal events&#39;, &#39;Flows&#39;, &#39;URLs&#39;, &#39;IDS alerts&#39;, &#39;Security events&#39; | 

## Example

```python
from openapi_client.models.update_network_syslog_servers_request_servers_inner import UpdateNetworkSyslogServersRequestServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSyslogServersRequestServersInner from a JSON string
update_network_syslog_servers_request_servers_inner_instance = UpdateNetworkSyslogServersRequestServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSyslogServersRequestServersInner.to_json())

# convert the object into a dict
update_network_syslog_servers_request_servers_inner_dict = update_network_syslog_servers_request_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkSyslogServersRequestServersInner from a dict
update_network_syslog_servers_request_servers_inner_from_dict = UpdateNetworkSyslogServersRequestServersInner.from_dict(update_network_syslog_servers_request_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


