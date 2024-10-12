# ApplicationInsightsComponentFeatureCapability

An Application Insights component feature capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the capability. | [optional] [readonly] 
**meter_id** | **str** | The meter used for the capability. | [optional] [readonly] 
**meter_rate_frequency** | **str** | The meter rate of the meter. | [optional] [readonly] 
**name** | **str** | The name of the capability. | [optional] [readonly] 
**unit** | **str** | The unit of the capability. | [optional] [readonly] 
**value** | **str** | The value of the capability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_feature_capability import ApplicationInsightsComponentFeatureCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentFeatureCapability from a JSON string
application_insights_component_feature_capability_instance = ApplicationInsightsComponentFeatureCapability.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentFeatureCapability.to_json())

# convert the object into a dict
application_insights_component_feature_capability_dict = application_insights_component_feature_capability_instance.to_dict()
# create an instance of ApplicationInsightsComponentFeatureCapability from a dict
application_insights_component_feature_capability_from_dict = ApplicationInsightsComponentFeatureCapability.from_dict(application_insights_component_feature_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


