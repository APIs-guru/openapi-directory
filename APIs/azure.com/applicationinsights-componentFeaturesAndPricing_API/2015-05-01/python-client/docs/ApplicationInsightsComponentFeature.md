# ApplicationInsightsComponentFeature

An Application Insights component daily data volume cap status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[ApplicationInsightsComponentFeatureCapability]**](ApplicationInsightsComponentFeatureCapability.md) | A list of Application Insights component feature capability. | [optional] [readonly] 
**feature_name** | **str** | The pricing feature name. | [optional] [readonly] 
**is_hidden** | **bool** | Reserved, not used now. | [optional] [readonly] 
**is_main_feature** | **bool** | Whether can apply addon feature on to it. | [optional] [readonly] 
**meter_id** | **str** | The meter id used for the feature. | [optional] [readonly] 
**meter_rate_frequency** | **str** | The meter rate for the feature&#39;s meter. | [optional] [readonly] 
**resouce_id** | **str** | Reserved, not used now. | [optional] [readonly] 
**supported_addon_features** | **str** | The add on features on main feature. | [optional] [readonly] 
**title** | **str** | Display name of the feature. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_feature import ApplicationInsightsComponentFeature

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentFeature from a JSON string
application_insights_component_feature_instance = ApplicationInsightsComponentFeature.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentFeature.to_json())

# convert the object into a dict
application_insights_component_feature_dict = application_insights_component_feature_instance.to_dict()
# create an instance of ApplicationInsightsComponentFeature from a dict
application_insights_component_feature_from_dict = ApplicationInsightsComponentFeature.from_dict(application_insights_component_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


