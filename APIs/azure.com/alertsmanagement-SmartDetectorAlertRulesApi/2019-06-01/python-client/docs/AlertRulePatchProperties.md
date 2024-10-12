# AlertRulePatchProperties

The alert rule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_groups** | [**ActionGroupsInformation**](ActionGroupsInformation.md) |  | [optional] 
**description** | **str** | The alert rule description. | [optional] 
**frequency** | **str** | The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes. | [optional] 
**severity** | **str** | The alert rule severity. | [optional] 
**state** | **str** | The alert rule state. | [optional] 
**throttling** | [**ThrottlingInformation**](ThrottlingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_rule_patch_properties import AlertRulePatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRulePatchProperties from a JSON string
alert_rule_patch_properties_instance = AlertRulePatchProperties.from_json(json)
# print the JSON string representation of the object
print(AlertRulePatchProperties.to_json())

# convert the object into a dict
alert_rule_patch_properties_dict = alert_rule_patch_properties_instance.to_dict()
# create an instance of AlertRulePatchProperties from a dict
alert_rule_patch_properties_from_dict = AlertRulePatchProperties.from_dict(alert_rule_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


