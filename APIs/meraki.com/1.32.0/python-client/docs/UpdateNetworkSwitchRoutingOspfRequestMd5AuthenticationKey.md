# UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey

MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | MD5 authentication key index. Key index must be between 1 to 255 | [optional] 
**passphrase** | **str** | MD5 authentication passphrase | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_routing_ospf_request_md5_authentication_key import UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey from a JSON string
update_network_switch_routing_ospf_request_md5_authentication_key_instance = UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey.to_json())

# convert the object into a dict
update_network_switch_routing_ospf_request_md5_authentication_key_dict = update_network_switch_routing_ospf_request_md5_authentication_key_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey from a dict
update_network_switch_routing_ospf_request_md5_authentication_key_from_dict = UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey.from_dict(update_network_switch_routing_ospf_request_md5_authentication_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


