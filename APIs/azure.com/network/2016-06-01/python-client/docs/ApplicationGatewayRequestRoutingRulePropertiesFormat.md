# ApplicationGatewayRequestRoutingRulePropertiesFormat

Properties of Request routing rule of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**SubResource**](SubResource.md) |  | [optional] 
**backend_http_settings** | [**SubResource**](SubResource.md) |  | [optional] 
**http_listener** | [**SubResource**](SubResource.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the request routing rule resource Updating/Deleting/Failed | [optional] 
**rule_type** | **str** | Rule type | [optional] 
**url_path_map** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_request_routing_rule_properties_format import ApplicationGatewayRequestRoutingRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRequestRoutingRulePropertiesFormat from a JSON string
application_gateway_request_routing_rule_properties_format_instance = ApplicationGatewayRequestRoutingRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRequestRoutingRulePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_request_routing_rule_properties_format_dict = application_gateway_request_routing_rule_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayRequestRoutingRulePropertiesFormat from a dict
application_gateway_request_routing_rule_properties_format_from_dict = ApplicationGatewayRequestRoutingRulePropertiesFormat.from_dict(application_gateway_request_routing_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


