# BlobServicesListMetrics200ResponseValueInnerMetricValuesInner

Metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average value of metric. | [optional] [readonly] 
**count** | **int** | Count of metric values. | [optional] [readonly] 
**maximum** | **float** | Maximum value of metric. | [optional] [readonly] 
**minimum** | **float** | Minimum value of metric. | [optional] [readonly] 
**properties** | **str** | Metric value properties. | [optional] [readonly] 
**time_stamp** | **datetime** | Timestamp of metric value. | [optional] [readonly] 
**total** | **float** | Total value of metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_services_list_metrics200_response_value_inner_metric_values_inner import BlobServicesListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServicesListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
blob_services_list_metrics200_response_value_inner_metric_values_inner_instance = BlobServicesListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(BlobServicesListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
blob_services_list_metrics200_response_value_inner_metric_values_inner_dict = blob_services_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of BlobServicesListMetrics200ResponseValueInnerMetricValuesInner from a dict
blob_services_list_metrics200_response_value_inner_metric_values_inner_from_dict = BlobServicesListMetrics200ResponseValueInnerMetricValuesInner.from_dict(blob_services_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


