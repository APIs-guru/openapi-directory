# GoogleCloudApigeeV1MetricAggregation

The optionally aggregated metric to query with its ordering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | Aggregation function associated with the metric. | [optional] 
**name** | **str** | Name of the metric | [optional] 
**order** | **str** | Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_metric_aggregation import GoogleCloudApigeeV1MetricAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1MetricAggregation from a JSON string
google_cloud_apigee_v1_metric_aggregation_instance = GoogleCloudApigeeV1MetricAggregation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1MetricAggregation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_metric_aggregation_dict = google_cloud_apigee_v1_metric_aggregation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1MetricAggregation from a dict
google_cloud_apigee_v1_metric_aggregation_from_dict = GoogleCloudApigeeV1MetricAggregation.from_dict(google_cloud_apigee_v1_metric_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


