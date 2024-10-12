# ListConsumerQuotaMetricsResponse

Response message for ListConsumerQuotaMetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[ConsumerQuotaMetric]**](ConsumerQuotaMetric.md) | Quota settings for the consumer, organized by quota metric. | [optional] 
**next_page_token** | **str** | Token identifying which result to start with; returned by a previous list call. | [optional] 

## Example

```python
from openapi_client.models.list_consumer_quota_metrics_response import ListConsumerQuotaMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsumerQuotaMetricsResponse from a JSON string
list_consumer_quota_metrics_response_instance = ListConsumerQuotaMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsumerQuotaMetricsResponse.to_json())

# convert the object into a dict
list_consumer_quota_metrics_response_dict = list_consumer_quota_metrics_response_instance.to_dict()
# create an instance of ListConsumerQuotaMetricsResponse from a dict
list_consumer_quota_metrics_response_from_dict = ListConsumerQuotaMetricsResponse.from_dict(list_consumer_quota_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


