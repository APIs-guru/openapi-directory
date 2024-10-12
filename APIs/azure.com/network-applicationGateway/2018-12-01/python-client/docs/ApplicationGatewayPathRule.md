# ApplicationGatewayPathRule

Path rule of URL path map of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | Name of the path rule that is unique within an Application Gateway. | [optional] 
**properties** | [**ApplicationGatewayPathRulePropertiesFormat**](ApplicationGatewayPathRulePropertiesFormat.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_path_rule import ApplicationGatewayPathRule

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayPathRule from a JSON string
application_gateway_path_rule_instance = ApplicationGatewayPathRule.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayPathRule.to_json())

# convert the object into a dict
application_gateway_path_rule_dict = application_gateway_path_rule_instance.to_dict()
# create an instance of ApplicationGatewayPathRule from a dict
application_gateway_path_rule_from_dict = ApplicationGatewayPathRule.from_dict(application_gateway_path_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


