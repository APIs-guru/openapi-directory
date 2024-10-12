# UpdateNetworkSsidRequestRadiusAccountingServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | IP address to which the APs will send RADIUS accounting messages | 
**port** | **int** | Port on the RADIUS server that is listening for accounting messages | [optional] 
**secret** | **str** | Shared key used to authenticate messages between the APs and RADIUS server | [optional] 

## Example

```python
from openapi_client.models.update_network_ssid_request_radius_accounting_servers_inner import UpdateNetworkSsidRequestRadiusAccountingServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSsidRequestRadiusAccountingServersInner from a JSON string
update_network_ssid_request_radius_accounting_servers_inner_instance = UpdateNetworkSsidRequestRadiusAccountingServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSsidRequestRadiusAccountingServersInner.to_json())

# convert the object into a dict
update_network_ssid_request_radius_accounting_servers_inner_dict = update_network_ssid_request_radius_accounting_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkSsidRequestRadiusAccountingServersInner from a dict
update_network_ssid_request_radius_accounting_servers_inner_from_dict = UpdateNetworkSsidRequestRadiusAccountingServersInner.from_dict(update_network_ssid_request_radius_accounting_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


