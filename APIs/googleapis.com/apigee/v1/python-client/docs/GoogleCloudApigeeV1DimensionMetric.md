# GoogleCloudApigeeV1DimensionMetric

Encapsulates a metric grouped by dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**individual_names** | **List[str]** | Individual dimension names. E.g. [\&quot;dim1_name\&quot;, \&quot;dim2_name\&quot;]. | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1Metric]**](GoogleCloudApigeeV1Metric.md) | List of metrics. | [optional] 
**name** | **str** | Comma joined dimension names. E.g. \&quot;dim1_name,dim2_name\&quot;. Deprecated. If name already has comma before join, we may get wrong splits. Please use individual_names. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_dimension_metric import GoogleCloudApigeeV1DimensionMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DimensionMetric from a JSON string
google_cloud_apigee_v1_dimension_metric_instance = GoogleCloudApigeeV1DimensionMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DimensionMetric.to_json())

# convert the object into a dict
google_cloud_apigee_v1_dimension_metric_dict = google_cloud_apigee_v1_dimension_metric_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DimensionMetric from a dict
google_cloud_apigee_v1_dimension_metric_from_dict = GoogleCloudApigeeV1DimensionMetric.from_dict(google_cloud_apigee_v1_dimension_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


