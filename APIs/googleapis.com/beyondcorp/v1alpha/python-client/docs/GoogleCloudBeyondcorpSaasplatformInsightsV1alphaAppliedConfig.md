# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig

The configuration that was applied to generate the result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | Output only. Aggregation type applied. | [optional] [readonly] 
**custom_grouping** | [**GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping.md) |  | [optional] 
**end_time** | **str** | Output only. Ending time for the duration for which insight was pulled. | [optional] [readonly] 
**field_filter** | **str** | Output only. Filters applied. | [optional] [readonly] 
**group** | **str** | Output only. Group id of the grouping applied. | [optional] [readonly] 
**start_time** | **str** | Output only. Starting time for the duration for which insight was pulled. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_applied_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


