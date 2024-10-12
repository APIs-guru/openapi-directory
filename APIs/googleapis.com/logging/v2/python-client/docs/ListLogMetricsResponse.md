# ListLogMetricsResponse

Result returned from ListLogMetrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[LogMetric]**](LogMetric.md) | A list of logs-based metrics. | [optional] 
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_log_metrics_response import ListLogMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLogMetricsResponse from a JSON string
list_log_metrics_response_instance = ListLogMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLogMetricsResponse.to_json())

# convert the object into a dict
list_log_metrics_response_dict = list_log_metrics_response_instance.to_dict()
# create an instance of ListLogMetricsResponse from a dict
list_log_metrics_response_from_dict = ListLogMetricsResponse.from_dict(list_log_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


