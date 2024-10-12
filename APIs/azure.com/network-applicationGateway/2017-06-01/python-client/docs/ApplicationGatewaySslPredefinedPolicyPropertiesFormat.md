# ApplicationGatewaySslPredefinedPolicyPropertiesFormat

Properties of ApplicationGatewaySslPredefinedPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cipher_suites** | [**List[CipherSuitesEnum]**](CipherSuitesEnum.md) | Ssl cipher suites to be enabled in the specified order for application gateway. | [optional] 
**min_protocol_version** | [**ProtocolsEnum**](ProtocolsEnum.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_ssl_predefined_policy_properties_format import ApplicationGatewaySslPredefinedPolicyPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaySslPredefinedPolicyPropertiesFormat from a JSON string
application_gateway_ssl_predefined_policy_properties_format_instance = ApplicationGatewaySslPredefinedPolicyPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaySslPredefinedPolicyPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_ssl_predefined_policy_properties_format_dict = application_gateway_ssl_predefined_policy_properties_format_instance.to_dict()
# create an instance of ApplicationGatewaySslPredefinedPolicyPropertiesFormat from a dict
application_gateway_ssl_predefined_policy_properties_format_from_dict = ApplicationGatewaySslPredefinedPolicyPropertiesFormat.from_dict(application_gateway_ssl_predefined_policy_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


