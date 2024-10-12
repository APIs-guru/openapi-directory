# ApplicationInsightsComponentProactiveDetectionConfigurationProperties

Properties that define a ProactiveDetection configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_emails** | **List[str]** | Custom email addresses for this rule notifications | [optional] 
**enabled** | **bool** | A flag that indicates whether this rule is enabled by the user | [optional] 
**last_updated_time** | **str** | The last time this rule was updated | [optional] [readonly] 
**name** | **str** | The rule name | [optional] [readonly] 
**rule_definitions** | [**ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions**](ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions.md) |  | [optional] 
**send_emails_to_subscription_owners** | **bool** | A flag that indicated whether notifications on this rule should be sent to subscription owners | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_proactive_detection_configuration_properties import ApplicationInsightsComponentProactiveDetectionConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentProactiveDetectionConfigurationProperties from a JSON string
application_insights_component_proactive_detection_configuration_properties_instance = ApplicationInsightsComponentProactiveDetectionConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentProactiveDetectionConfigurationProperties.to_json())

# convert the object into a dict
application_insights_component_proactive_detection_configuration_properties_dict = application_insights_component_proactive_detection_configuration_properties_instance.to_dict()
# create an instance of ApplicationInsightsComponentProactiveDetectionConfigurationProperties from a dict
application_insights_component_proactive_detection_configuration_properties_from_dict = ApplicationInsightsComponentProactiveDetectionConfigurationProperties.from_dict(application_insights_component_proactive_detection_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


