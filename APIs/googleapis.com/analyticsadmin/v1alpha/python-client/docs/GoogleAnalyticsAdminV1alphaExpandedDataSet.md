# GoogleAnalyticsAdminV1alphaExpandedDataSet

A resource message representing a GA4 ExpandedDataSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_collection_start_time** | **str** | Output only. Time when expanded data set began (or will begin) collecing data. | [optional] [readonly] 
**description** | **str** | Optional. The description of the ExpandedDataSet. Max 50 chars. | [optional] 
**dimension_filter_expression** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression.md) |  | [optional] 
**dimension_names** | **List[str]** | Immutable. The list of dimensions included in the ExpandedDataSet. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names. | [optional] 
**display_name** | **str** | Required. The display name of the ExpandedDataSet. Max 200 chars. | [optional] 
**metric_names** | **List[str]** | Immutable. The list of metrics included in the ExpandedDataSet. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of dimension names. | [optional] 
**name** | **str** | Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set} | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_expanded_data_set import GoogleAnalyticsAdminV1alphaExpandedDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSet from a JSON string
google_analytics_admin_v1alpha_expanded_data_set_instance = GoogleAnalyticsAdminV1alphaExpandedDataSet.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaExpandedDataSet.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_expanded_data_set_dict = google_analytics_admin_v1alpha_expanded_data_set_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSet from a dict
google_analytics_admin_v1alpha_expanded_data_set_from_dict = GoogleAnalyticsAdminV1alphaExpandedDataSet.from_dict(google_analytics_admin_v1alpha_expanded_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


