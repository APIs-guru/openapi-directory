# ProtocolCustomSettingsFormat

DDoS custom policy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **str** | The protocol for which the DDoS protection policy is being customized. | [optional] 
**source_rate_override** | **str** | The customized DDoS protection source rate. | [optional] 
**trigger_rate_override** | **str** | The customized DDoS protection trigger rate. | [optional] 
**trigger_sensitivity_override** | **str** | The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic. | [optional] 

## Example

```python
from openapi_client.models.protocol_custom_settings_format import ProtocolCustomSettingsFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ProtocolCustomSettingsFormat from a JSON string
protocol_custom_settings_format_instance = ProtocolCustomSettingsFormat.from_json(json)
# print the JSON string representation of the object
print(ProtocolCustomSettingsFormat.to_json())

# convert the object into a dict
protocol_custom_settings_format_dict = protocol_custom_settings_format_instance.to_dict()
# create an instance of ProtocolCustomSettingsFormat from a dict
protocol_custom_settings_format_from_dict = ProtocolCustomSettingsFormat.from_dict(protocol_custom_settings_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


