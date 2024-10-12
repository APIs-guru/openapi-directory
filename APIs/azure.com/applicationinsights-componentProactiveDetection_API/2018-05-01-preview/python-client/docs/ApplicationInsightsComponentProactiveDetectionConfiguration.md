# ApplicationInsightsComponentProactiveDetectionConfiguration

A ProactiveDetection configuration definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Azure resource name | [optional] 
**properties** | [**ApplicationInsightsComponentProactiveDetectionConfigurationProperties**](ApplicationInsightsComponentProactiveDetectionConfigurationProperties.md) |  | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_proactive_detection_configuration import ApplicationInsightsComponentProactiveDetectionConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentProactiveDetectionConfiguration from a JSON string
application_insights_component_proactive_detection_configuration_instance = ApplicationInsightsComponentProactiveDetectionConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentProactiveDetectionConfiguration.to_json())

# convert the object into a dict
application_insights_component_proactive_detection_configuration_dict = application_insights_component_proactive_detection_configuration_instance.to_dict()
# create an instance of ApplicationInsightsComponentProactiveDetectionConfiguration from a dict
application_insights_component_proactive_detection_configuration_from_dict = ApplicationInsightsComponentProactiveDetectionConfiguration.from_dict(application_insights_component_proactive_detection_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


