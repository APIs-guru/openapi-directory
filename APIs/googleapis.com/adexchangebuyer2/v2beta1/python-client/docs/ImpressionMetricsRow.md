# ImpressionMetricsRow

The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_impressions** | [**MetricValue**](MetricValue.md) |  | [optional] 
**bid_requests** | [**MetricValue**](MetricValue.md) |  | [optional] 
**inventory_matches** | [**MetricValue**](MetricValue.md) |  | [optional] 
**responses_with_bids** | [**MetricValue**](MetricValue.md) |  | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 
**successful_responses** | [**MetricValue**](MetricValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.impression_metrics_row import ImpressionMetricsRow

# TODO update the JSON string below
json = "{}"
# create an instance of ImpressionMetricsRow from a JSON string
impression_metrics_row_instance = ImpressionMetricsRow.from_json(json)
# print the JSON string representation of the object
print(ImpressionMetricsRow.to_json())

# convert the object into a dict
impression_metrics_row_dict = impression_metrics_row_instance.to_dict()
# create an instance of ImpressionMetricsRow from a dict
impression_metrics_row_from_dict = ImpressionMetricsRow.from_dict(impression_metrics_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


