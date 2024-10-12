# AutomationProperties

A set of properties that defines the behavior of the automation configuration. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[AutomationAction]**](AutomationAction.md) | A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true. | [optional] 
**description** | **str** | The security automation description. | [optional] 
**is_enabled** | **bool** | Indicates whether the security automation is enabled. | [optional] 
**scopes** | [**List[AutomationScope]**](AutomationScope.md) | A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes. | [optional] 
**sources** | [**List[AutomationSource]**](AutomationSource.md) | A collection of the source event types which evaluate the security automation set of rules. | [optional] 

## Example

```python
from openapi_client.models.automation_properties import AutomationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationProperties from a JSON string
automation_properties_instance = AutomationProperties.from_json(json)
# print the JSON string representation of the object
print(AutomationProperties.to_json())

# convert the object into a dict
automation_properties_dict = automation_properties_instance.to_dict()
# create an instance of AutomationProperties from a dict
automation_properties_from_dict = AutomationProperties.from_dict(automation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


