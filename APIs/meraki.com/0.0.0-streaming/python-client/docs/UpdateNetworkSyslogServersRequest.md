# UpdateNetworkSyslogServersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | [**List[UpdateNetworkSyslogServersRequestServersInner]**](UpdateNetworkSyslogServersRequestServersInner.md) | A list of the syslog servers for this network | 

## Example

```python
from openapi_client.models.update_network_syslog_servers_request import UpdateNetworkSyslogServersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSyslogServersRequest from a JSON string
update_network_syslog_servers_request_instance = UpdateNetworkSyslogServersRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSyslogServersRequest.to_json())

# convert the object into a dict
update_network_syslog_servers_request_dict = update_network_syslog_servers_request_instance.to_dict()
# create an instance of UpdateNetworkSyslogServersRequest from a dict
update_network_syslog_servers_request_from_dict = UpdateNetworkSyslogServersRequest.from_dict(update_network_syslog_servers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


