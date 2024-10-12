# ListImpressionMetricsResponse

Response message for listing the metrics that are measured in number of impressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_metrics_rows** | [**List[ImpressionMetricsRow]**](ImpressionMetricsRow.md) | List of rows, each containing a set of impression metrics. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_impression_metrics_response import ListImpressionMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListImpressionMetricsResponse from a JSON string
list_impression_metrics_response_instance = ListImpressionMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(ListImpressionMetricsResponse.to_json())

# convert the object into a dict
list_impression_metrics_response_dict = list_impression_metrics_response_instance.to_dict()
# create an instance of ListImpressionMetricsResponse from a dict
list_impression_metrics_response_from_dict = ListImpressionMetricsResponse.from_dict(list_impression_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


