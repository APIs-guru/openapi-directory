# ApplicationGatewayPathRulePropertiesFormat

Properties of probe of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**SubResource**](SubResource.md) |  | [optional] 
**backend_http_settings** | [**SubResource**](SubResource.md) |  | [optional] 
**paths** | **List[str]** | Gets or sets the path rules of URL path map | [optional] 
**provisioning_state** | **str** | Gets or sets path rule of URL path map resource Updating/Deleting/Failed | [optional] 

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


