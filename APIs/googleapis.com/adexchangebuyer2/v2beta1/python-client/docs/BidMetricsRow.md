# BidMetricsRow

The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bids** | [**MetricValue**](MetricValue.md) |  | [optional] 
**bids_in_auction** | [**MetricValue**](MetricValue.md) |  | [optional] 
**billed_impressions** | [**MetricValue**](MetricValue.md) |  | [optional] 
**impressions_won** | [**MetricValue**](MetricValue.md) |  | [optional] 
**measurable_impressions** | [**MetricValue**](MetricValue.md) |  | [optional] 
**reached_queries** | [**MetricValue**](MetricValue.md) |  | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 
**viewable_impressions** | [**MetricValue**](MetricValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.bid_metrics_row import BidMetricsRow

# TODO update the JSON string below
json = "{}"
# create an instance of BidMetricsRow from a JSON string
bid_metrics_row_instance = BidMetricsRow.from_json(json)
# print the JSON string representation of the object
print(BidMetricsRow.to_json())

# convert the object into a dict
bid_metrics_row_dict = bid_metrics_row_instance.to_dict()
# create an instance of BidMetricsRow from a dict
bid_metrics_row_from_dict = BidMetricsRow.from_dict(bid_metrics_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


