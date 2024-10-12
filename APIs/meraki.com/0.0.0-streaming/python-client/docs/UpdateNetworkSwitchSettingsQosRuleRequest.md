# UpdateNetworkSwitchSettingsQosRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dscp** | **int** | DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0. | [optional] 
**dst_port** | **int** | The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**dst_port_range** | **str** | The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**protocol** | **str** | The protocol of the incoming packet. Can be one of \&quot;ANY\&quot;, \&quot;TCP\&quot; or \&quot;UDP\&quot;. Default value is \&quot;ANY\&quot;. | [optional] 
**src_port** | **int** | The source port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**src_port_range** | **str** | The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**vlan** | **int** | The VLAN of the incoming packet. A null value will match any VLAN. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_settings_qos_rule_request import UpdateNetworkSwitchSettingsQosRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchSettingsQosRuleRequest from a JSON string
update_network_switch_settings_qos_rule_request_instance = UpdateNetworkSwitchSettingsQosRuleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchSettingsQosRuleRequest.to_json())

# convert the object into a dict
update_network_switch_settings_qos_rule_request_dict = update_network_switch_settings_qos_rule_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchSettingsQosRuleRequest from a dict
update_network_switch_settings_qos_rule_request_from_dict = UpdateNetworkSwitchSettingsQosRuleRequest.from_dict(update_network_switch_settings_qos_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


