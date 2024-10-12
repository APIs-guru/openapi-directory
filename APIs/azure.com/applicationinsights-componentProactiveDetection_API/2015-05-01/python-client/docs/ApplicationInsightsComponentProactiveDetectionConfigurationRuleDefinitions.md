# ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions

Static definitions of the ProactiveDetection configuration rule (same values for all components).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The rule description | [optional] 
**display_name** | **str** | The rule name as it is displayed in UI | [optional] 
**help_url** | **str** | URL which displays additional info about the proactive detection rule | [optional] 
**is_enabled_by_default** | **bool** | A flag indicating whether the rule is enabled by default | [optional] 
**is_hidden** | **bool** | A flag indicating whether the rule is hidden (from the UI) | [optional] 
**is_in_preview** | **bool** | A flag indicating whether the rule is in preview | [optional] 
**name** | **str** | The rule name | [optional] 
**supports_email_notifications** | **bool** | A flag indicating whether email notifications are supported for detections for this rule | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_proactive_detection_configuration_rule_definitions import ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions from a JSON string
application_insights_component_proactive_detection_configuration_rule_definitions_instance = ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions.to_json())

# convert the object into a dict
application_insights_component_proactive_detection_configuration_rule_definitions_dict = application_insights_component_proactive_detection_configuration_rule_definitions_instance.to_dict()
# create an instance of ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions from a dict
application_insights_component_proactive_detection_configuration_rule_definitions_from_dict = ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions.from_dict(application_insights_component_proactive_detection_configuration_rule_definitions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


