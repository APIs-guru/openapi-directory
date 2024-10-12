# ConsumerQuotaMetric

Consumer quota settings for a quota metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_quota_limits** | [**List[ConsumerQuotaLimit]**](ConsumerQuotaLimit.md) | The consumer quota for each quota limit defined on the metric. | [optional] 
**descendant_consumer_quota_limits** | [**List[ConsumerQuotaLimit]**](ConsumerQuotaLimit.md) | The quota limits targeting the descendant containers of the consumer in request. If the consumer in request is of type &#x60;organizations&#x60; or &#x60;folders&#x60;, the field will list per-project limits in the metric; if the consumer in request is of type &#x60;project&#x60;, the field will be empty. The &#x60;quota_buckets&#x60; field of each descendant consumer quota limit will not be populated. | [optional] 
**display_name** | **str** | The display name of the metric. An example name would be: &#x60;CPUs&#x60; | [optional] 
**metric** | **str** | The name of the metric. An example name would be: &#x60;compute.googleapis.com/cpus&#x60; | [optional] 
**name** | **str** | The resource name of the quota settings on this metric for this consumer. An example name would be: &#x60;projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus&#x60; The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future. | [optional] 
**unit** | **str** | The units in which the metric value is reported. | [optional] 

## Example

```python
from openapi_client.models.consumer_quota_metric import ConsumerQuotaMetric

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerQuotaMetric from a JSON string
consumer_quota_metric_instance = ConsumerQuotaMetric.from_json(json)
# print the JSON string representation of the object
print(ConsumerQuotaMetric.to_json())

# convert the object into a dict
consumer_quota_metric_dict = consumer_quota_metric_instance.to_dict()
# create an instance of ConsumerQuotaMetric from a dict
consumer_quota_metric_from_dict = ConsumerQuotaMetric.from_dict(consumer_quota_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


