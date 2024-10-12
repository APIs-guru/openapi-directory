# NonBillableWinningBidStatusRow

The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 
**status** | **str** | The status specifying why the winning bids were not billed. | [optional] 

## Example

```python
from openapi_client.models.non_billable_winning_bid_status_row import NonBillableWinningBidStatusRow

# TODO update the JSON string below
json = "{}"
# create an instance of NonBillableWinningBidStatusRow from a JSON string
non_billable_winning_bid_status_row_instance = NonBillableWinningBidStatusRow.from_json(json)
# print the JSON string representation of the object
print(NonBillableWinningBidStatusRow.to_json())

# convert the object into a dict
non_billable_winning_bid_status_row_dict = non_billable_winning_bid_status_row_instance.to_dict()
# create an instance of NonBillableWinningBidStatusRow from a dict
non_billable_winning_bid_status_row_from_dict = NonBillableWinningBidStatusRow.from_dict(non_billable_winning_bid_status_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


