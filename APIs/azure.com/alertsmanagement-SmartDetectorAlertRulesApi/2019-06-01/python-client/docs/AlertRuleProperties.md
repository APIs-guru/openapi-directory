# AlertRuleProperties

The alert rule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_groups** | [**ActionGroupsInformation**](ActionGroupsInformation.md) |  | 
**description** | **str** | The alert rule description. | [optional] 
**detector** | [**Detector**](Detector.md) |  | 
**frequency** | **str** | The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes. | 
**scope** | **List[str]** | The alert rule resources scope. | 
**severity** | **str** | The alert rule severity. | 
**state** | **str** | The alert rule state. | 
**throttling** | [**ThrottlingInformation**](ThrottlingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_rule_properties import AlertRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRuleProperties from a JSON string
alert_rule_properties_instance = AlertRuleProperties.from_json(json)
# print the JSON string representation of the object
print(AlertRuleProperties.to_json())

# convert the object into a dict
alert_rule_properties_dict = alert_rule_properties_instance.to_dict()
# create an instance of AlertRuleProperties from a dict
alert_rule_properties_from_dict = AlertRuleProperties.from_dict(alert_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


