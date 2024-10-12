# AlertRuleResourcePatch

The alert rule object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertRule**](AlertRule.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.alert_rule_resource_patch import AlertRuleResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRuleResourcePatch from a JSON string
alert_rule_resource_patch_instance = AlertRuleResourcePatch.from_json(json)
# print the JSON string representation of the object
print(AlertRuleResourcePatch.to_json())

# convert the object into a dict
alert_rule_resource_patch_dict = alert_rule_resource_patch_instance.to_dict()
# create an instance of AlertRuleResourcePatch from a dict
alert_rule_resource_patch_from_dict = AlertRuleResourcePatch.from_dict(alert_rule_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


