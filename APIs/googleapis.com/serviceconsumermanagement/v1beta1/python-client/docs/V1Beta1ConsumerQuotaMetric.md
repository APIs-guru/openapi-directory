# V1Beta1ConsumerQuotaMetric

Consumer quota settings for a quota metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_quota_limits** | [**List[V1Beta1ConsumerQuotaLimit]**](V1Beta1ConsumerQuotaLimit.md) | The consumer quota for each quota limit defined on the metric. | [optional] 
**descendant_consumer_quota_limits** | [**List[V1Beta1ConsumerQuotaLimit]**](V1Beta1ConsumerQuotaLimit.md) | The quota limits targeting the descendant containers of the consumer in request. If the consumer in request is of type &#x60;organizations&#x60; or &#x60;folders&#x60;, the field will list per-project limits in the metric; if the consumer in request is of type &#x60;project&#x60;, the field will be empty. The &#x60;quota_buckets&#x60; field of each descendant consumer quota limit will not be populated. | [optional] 
**display_name** | **str** | The display name of the metric. An example name would be: \&quot;CPUs\&quot; | [optional] 
**metric** | **str** | The name of the metric. An example name would be: &#x60;compute.googleapis.com/cpus&#x60; | [optional] 
**name** | **str** | The resource name of the quota settings on this metric for this consumer. An example name would be: &#x60;services/serviceconsumermanagement.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus&#x60; The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future. | [optional] 
**unit** | **str** | The units in which the metric value is reported. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_consumer_quota_metric import V1Beta1ConsumerQuotaMetric

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ConsumerQuotaMetric from a JSON string
v1_beta1_consumer_quota_metric_instance = V1Beta1ConsumerQuotaMetric.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ConsumerQuotaMetric.to_json())

# convert the object into a dict
v1_beta1_consumer_quota_metric_dict = v1_beta1_consumer_quota_metric_instance.to_dict()
# create an instance of V1Beta1ConsumerQuotaMetric from a dict
v1_beta1_consumer_quota_metric_from_dict = V1Beta1ConsumerQuotaMetric.from_dict(v1_beta1_consumer_quota_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


