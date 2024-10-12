# V1Beta1ListConsumerQuotaMetricsResponse

Response message for ListConsumerQuotaMetrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[V1Beta1ConsumerQuotaMetric]**](V1Beta1ConsumerQuotaMetric.md) | Quota settings for the consumer, organized by quota metric. | [optional] 
**next_page_token** | **str** | Token identifying which result to start with; returned by a previous list call. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_list_consumer_quota_metrics_response import V1Beta1ListConsumerQuotaMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ListConsumerQuotaMetricsResponse from a JSON string
v1_beta1_list_consumer_quota_metrics_response_instance = V1Beta1ListConsumerQuotaMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ListConsumerQuotaMetricsResponse.to_json())

# convert the object into a dict
v1_beta1_list_consumer_quota_metrics_response_dict = v1_beta1_list_consumer_quota_metrics_response_instance.to_dict()
# create an instance of V1Beta1ListConsumerQuotaMetricsResponse from a dict
v1_beta1_list_consumer_quota_metrics_response_from_dict = V1Beta1ListConsumerQuotaMetricsResponse.from_dict(v1_beta1_list_consumer_quota_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


