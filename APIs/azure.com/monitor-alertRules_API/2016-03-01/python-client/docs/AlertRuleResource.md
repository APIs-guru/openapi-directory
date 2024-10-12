# AlertRuleResource

The alert rule resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertRule**](AlertRule.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_rule_resource import AlertRuleResource

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRuleResource from a JSON string
alert_rule_resource_instance = AlertRuleResource.from_json(json)
# print the JSON string representation of the object
print(AlertRuleResource.to_json())

# convert the object into a dict
alert_rule_resource_dict = alert_rule_resource_instance.to_dict()
# create an instance of AlertRuleResource from a dict
alert_rule_resource_from_dict = AlertRuleResource.from_dict(alert_rule_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


