# GoogleCloudApigeeV1Metric

Encapsulates the metric data point. For example: ```{ \"name\": \"sum(message_count)\", \"values\" : [ { \"timestamp\": 1549004400000, \"value\": \"39.0\" }, { \"timestamp\" : 1548997200000, \"value\" : \"0.0\" } ] }``` or ```{ \"name\": \"sum(message_count)\", \"values\" : [\"39.0\"] }```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Metric name. | [optional] 
**values** | **List[object]** | List of metric values. Possible value formats include: &#x60;\&quot;values\&quot;:[\&quot;39.0\&quot;]&#x60; or &#x60;\&quot;values\&quot;:[ { \&quot;value\&quot;: \&quot;39.0\&quot;, \&quot;timestamp\&quot;: 1232434354} ]&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_metric import GoogleCloudApigeeV1Metric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Metric from a JSON string
google_cloud_apigee_v1_metric_instance = GoogleCloudApigeeV1Metric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Metric.to_json())

# convert the object into a dict
google_cloud_apigee_v1_metric_dict = google_cloud_apigee_v1_metric_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Metric from a dict
google_cloud_apigee_v1_metric_from_dict = GoogleCloudApigeeV1Metric.from_dict(google_cloud_apigee_v1_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


