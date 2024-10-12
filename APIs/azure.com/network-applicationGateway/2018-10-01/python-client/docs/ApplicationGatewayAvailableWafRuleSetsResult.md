# ApplicationGatewayAvailableWafRuleSetsResult

Response for ApplicationGatewayAvailableWafRuleSets API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[object]** | The list of application gateway rule sets. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_available_waf_rule_sets_result import ApplicationGatewayAvailableWafRuleSetsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAvailableWafRuleSetsResult from a JSON string
application_gateway_available_waf_rule_sets_result_instance = ApplicationGatewayAvailableWafRuleSetsResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAvailableWafRuleSetsResult.to_json())

# convert the object into a dict
application_gateway_available_waf_rule_sets_result_dict = application_gateway_available_waf_rule_sets_result_instance.to_dict()
# create an instance of ApplicationGatewayAvailableWafRuleSetsResult from a dict
application_gateway_available_waf_rule_sets_result_from_dict = ApplicationGatewayAvailableWafRuleSetsResult.from_dict(application_gateway_available_waf_rule_sets_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


