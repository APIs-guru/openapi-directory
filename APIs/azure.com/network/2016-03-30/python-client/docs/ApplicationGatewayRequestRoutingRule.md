# ApplicationGatewayRequestRoutingRule

Request routing rule of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayRequestRoutingRulePropertiesFormat**](ApplicationGatewayRequestRoutingRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_request_routing_rule import ApplicationGatewayRequestRoutingRule

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayRequestRoutingRule from a JSON string
application_gateway_request_routing_rule_instance = ApplicationGatewayRequestRoutingRule.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayRequestRoutingRule.to_json())

# convert the object into a dict
application_gateway_request_routing_rule_dict = application_gateway_request_routing_rule_instance.to_dict()
# create an instance of ApplicationGatewayRequestRoutingRule from a dict
application_gateway_request_routing_rule_from_dict = ApplicationGatewayRequestRoutingRule.from_dict(application_gateway_request_routing_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


