# GoogleAnalyticsAdminV1alphaCalculatedMetric

A definition for a calculated metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_metric_id** | **str** | Output only. The ID to use for the calculated metric. In the UI, this is referred to as the \&quot;API name.\&quot; The calculated_metric_id is used when referencing this calculated metric from external APIs. For example, \&quot;calcMetric:{calculated_metric_id}\&quot;. | [optional] [readonly] 
**description** | **str** | Optional. Description for this calculated metric. Max length of 4096 characters. | [optional] 
**display_name** | **str** | Required. Display name for this calculated metric as shown in the Google Analytics UI. Max length 82 characters. | [optional] 
**formula** | **str** | Required. The calculated metric&#39;s definition. Maximum number of unique referenced custom metrics is 5. Formulas supports the following operations: + (addition), - (subtraction), - (negative), * (multiplication), / (division), () (parenthesis). Any valid real numbers are acceptable that fit in a Long (64bit integer) or a Double (64 bit floating point number). Example formula: \&quot;( customEvent:parameter_name + cartPurchaseQuantity ) / 2.0\&quot; | [optional] 
**invalid_metric_reference** | **bool** | Output only. If true, this calculated metric has a invalid metric reference. Anything using a calculated metric with invalid_metric_reference set to true may fail, produce warnings, or produce unexpected results. | [optional] [readonly] 
**metric_unit** | **str** | Required. The type for the calculated metric&#39;s value. | [optional] 
**name** | **str** | Output only. Resource name for this CalculatedMetric. Format: &#39;properties/{property_id}/calculatedMetrics/{calculated_metric_id}&#39; | [optional] [readonly] 
**restricted_metric_type** | **List[str]** | Output only. Types of restricted data that this metric contains. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_calculated_metric import GoogleAnalyticsAdminV1alphaCalculatedMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaCalculatedMetric from a JSON string
google_analytics_admin_v1alpha_calculated_metric_instance = GoogleAnalyticsAdminV1alphaCalculatedMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaCalculatedMetric.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_calculated_metric_dict = google_analytics_admin_v1alpha_calculated_metric_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaCalculatedMetric from a dict
google_analytics_admin_v1alpha_calculated_metric_from_dict = GoogleAnalyticsAdminV1alphaCalculatedMetric.from_dict(google_analytics_admin_v1alpha_calculated_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


