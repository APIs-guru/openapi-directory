# ApplicationGatewayPathRulePropertiesFormat

Properties of path rule of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**backend_http_settings** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**paths** | **List[str]** | Path rules of URL path map. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**redirect_configuration** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**rewrite_rule_set** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_path_rule_properties_format import ApplicationGatewayPathRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayPathRulePropertiesFormat from a JSON string
application_gateway_path_rule_properties_format_instance = ApplicationGatewayPathRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayPathRulePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_path_rule_properties_format_dict = application_gateway_path_rule_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayPathRulePropertiesFormat from a dict
application_gateway_path_rule_properties_format_from_dict = ApplicationGatewayPathRulePropertiesFormat.from_dict(application_gateway_path_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


