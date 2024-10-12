# ApplicationGatewaySslPolicy

Application Gateway Ssl policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cipher_suites** | [**List[CipherSuitesEnum]**](CipherSuitesEnum.md) | Ssl cipher suites to be enabled in the specified order to application gateway. | [optional] 
**disabled_ssl_protocols** | [**List[ProtocolsEnum]**](ProtocolsEnum.md) | Ssl protocols to be disabled on application gateway. | [optional] 
**min_protocol_version** | [**ProtocolsEnum**](ProtocolsEnum.md) |  | [optional] 
**policy_name** | [**PolicyNameEnum**](PolicyNameEnum.md) |  | [optional] 
**policy_type** | **str** | Type of Ssl Policy | [optional] 

## Example

```python
from openapi_client.models.application_gateway_ssl_policy import ApplicationGatewaySslPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaySslPolicy from a JSON string
application_gateway_ssl_policy_instance = ApplicationGatewaySslPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaySslPolicy.to_json())

# convert the object into a dict
application_gateway_ssl_policy_dict = application_gateway_ssl_policy_instance.to_dict()
# create an instance of ApplicationGatewaySslPolicy from a dict
application_gateway_ssl_policy_from_dict = ApplicationGatewaySslPolicy.from_dict(application_gateway_ssl_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


