# CreateNetworkSwitchSettingsQosRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dscp** | **int** | DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0 | [optional] 
**dst_port** | **int** | The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**dst_port_range** | **str** | The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**protocol** | **str** | The protocol of the incoming packet. Can be one of \&quot;ANY\&quot;, \&quot;TCP\&quot; or \&quot;UDP\&quot;. Default value is \&quot;ANY\&quot; | [optional] 
**src_port** | **int** | The source port of the incoming packet. Applicable only if protocol is TCP or UDP. | [optional] 
**src_port_range** | **str** | The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 | [optional] 
**vlan** | **int** | The VLAN of the incoming packet. A null value will match any VLAN. | 

## Example

```python
from openapi_client.models.create_network_switch_settings_qos_rule_request import CreateNetworkSwitchSettingsQosRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchSettingsQosRuleRequest from a JSON string
create_network_switch_settings_qos_rule_request_instance = CreateNetworkSwitchSettingsQosRuleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchSettingsQosRuleRequest.to_json())

# convert the object into a dict
create_network_switch_settings_qos_rule_request_dict = create_network_switch_settings_qos_rule_request_instance.to_dict()
# create an instance of CreateNetworkSwitchSettingsQosRuleRequest from a dict
create_network_switch_settings_qos_rule_request_from_dict = CreateNetworkSwitchSettingsQosRuleRequest.from_dict(create_network_switch_settings_qos_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


