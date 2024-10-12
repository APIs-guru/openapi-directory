# ApplicationGatewayRequestRoutingRulePropertiesFormat

Properties of request routing rule of the application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**Model0**](Model0.md) |  | [optional] 
**backend_http_settings** | [**Model0**](Model0.md) |  | [optional] 
**http_listener** | [**Model0**](Model0.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the request routing rule resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**rule_type** | **str** | Rule type. Possible values are: &#39;Basic&#39; and &#39;PathBasedRouting&#39;. | [optional] 
**url_path_map** | [**Model0**](Model0.md) |  | [optional] 

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


