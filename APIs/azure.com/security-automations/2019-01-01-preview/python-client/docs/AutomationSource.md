# AutomationSource

The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_source** | **str** | A valid event source type. | [optional] 
**rule_sets** | [**List[AutomationRuleSet]**](AutomationRuleSet.md) | A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical &#39;or&#39;). | [optional] 

## Example

```python
from openapi_client.models.automation_source import AutomationSource

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationSource from a JSON string
automation_source_instance = AutomationSource.from_json(json)
# print the JSON string representation of the object
print(AutomationSource.to_json())

# convert the object into a dict
automation_source_dict = automation_source_instance.to_dict()
# create an instance of AutomationSource from a dict
automation_source_from_dict = AutomationSource.from_dict(automation_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


