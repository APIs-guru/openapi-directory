# ListBidMetricsResponse

Response message for listing the metrics that are measured in number of bids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_metrics_rows** | [**List[BidMetricsRow]**](BidMetricsRow.md) | List of rows, each containing a set of bid metrics. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_bid_metrics_response import ListBidMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBidMetricsResponse from a JSON string
list_bid_metrics_response_instance = ListBidMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBidMetricsResponse.to_json())

# convert the object into a dict
list_bid_metrics_response_dict = list_bid_metrics_response_instance.to_dict()
# create an instance of ListBidMetricsResponse from a dict
list_bid_metrics_response_from_dict = ListBidMetricsResponse.from_dict(list_bid_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


