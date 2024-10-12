# ApplicationInsightsComponentAvailableFeatures

An Application Insights component available features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[ApplicationInsightsComponentFeature]**](ApplicationInsightsComponentFeature.md) | A list of Application Insights component feature. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_available_features import ApplicationInsightsComponentAvailableFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentAvailableFeatures from a JSON string
application_insights_component_available_features_instance = ApplicationInsightsComponentAvailableFeatures.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentAvailableFeatures.to_json())

# convert the object into a dict
application_insights_component_available_features_dict = application_insights_component_available_features_instance.to_dict()
# create an instance of ApplicationInsightsComponentAvailableFeatures from a dict
application_insights_component_available_features_from_dict = ApplicationInsightsComponentAvailableFeatures.from_dict(application_insights_component_available_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


