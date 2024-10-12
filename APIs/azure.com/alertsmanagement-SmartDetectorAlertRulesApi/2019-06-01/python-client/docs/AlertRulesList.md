# AlertRulesList

List of Smart Detector alert rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[AlertRule]**](AlertRule.md) | List of Smart Detector alert rules. | [optional] 

## Example

```python
from openapi_client.models.alert_rules_list import AlertRulesList

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRulesList from a JSON string
alert_rules_list_instance = AlertRulesList.from_json(json)
# print the JSON string representation of the object
print(AlertRulesList.to_json())

# convert the object into a dict
alert_rules_list_dict = alert_rules_list_instance.to_dict()
# create an instance of AlertRulesList from a dict
alert_rules_list_from_dict = AlertRulesList.from_dict(alert_rules_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


