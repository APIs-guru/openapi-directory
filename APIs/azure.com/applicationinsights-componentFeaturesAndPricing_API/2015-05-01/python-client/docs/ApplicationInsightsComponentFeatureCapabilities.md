# ApplicationInsightsComponentFeatureCapabilities

An Application Insights component feature capabilities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_integration** | **bool** | Reserved, not used now. | [optional] [readonly] 
**api_access_level** | **str** | Reserved, not used now. | [optional] [readonly] 
**application_map** | **bool** | Reserved, not used now. | [optional] [readonly] 
**burst_throttle_policy** | **str** | Reserved, not used now. | [optional] [readonly] 
**daily_cap** | **float** | Daily data volume cap in GB. | [optional] [readonly] 
**daily_cap_reset_time** | **float** | Daily data volume cap UTC reset hour. | [optional] [readonly] 
**live_stream_metrics** | **bool** | Reserved, not used now. | [optional] [readonly] 
**metadata_class** | **str** | Reserved, not used now. | [optional] [readonly] 
**multiple_step_web_test** | **bool** | Whether allow to use multiple steps web test feature. | [optional] [readonly] 
**open_schema** | **bool** | Reserved, not used now. | [optional] [readonly] 
**power_bi_integration** | **bool** | Reserved, not used now. | [optional] [readonly] 
**proactive_detection** | **bool** | Reserved, not used now. | [optional] [readonly] 
**support_export_data** | **bool** | Whether allow to use continuous export feature. | [optional] [readonly] 
**throttle_rate** | **float** | Reserved, not used now. | [optional] [readonly] 
**tracking_type** | **str** | The application insights component used tracking type. | [optional] [readonly] 
**work_item_integration** | **bool** | Whether allow to use work item integration feature. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_feature_capabilities import ApplicationInsightsComponentFeatureCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentFeatureCapabilities from a JSON string
application_insights_component_feature_capabilities_instance = ApplicationInsightsComponentFeatureCapabilities.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentFeatureCapabilities.to_json())

# convert the object into a dict
application_insights_component_feature_capabilities_dict = application_insights_component_feature_capabilities_instance.to_dict()
# create an instance of ApplicationInsightsComponentFeatureCapabilities from a dict
application_insights_component_feature_capabilities_from_dict = ApplicationInsightsComponentFeatureCapabilities.from_dict(application_insights_component_feature_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


