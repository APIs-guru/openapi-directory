# BidResponseWithoutBidsStatusRow

The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_count** | [**MetricValue**](MetricValue.md) |  | [optional] 
**row_dimensions** | [**RowDimensions**](RowDimensions.md) |  | [optional] 
**status** | **str** | The status specifying why the bid responses were considered to have no applicable bids. | [optional] 

## Example

```python
from openapi_client.models.bid_response_without_bids_status_row import BidResponseWithoutBidsStatusRow

# TODO update the JSON string below
json = "{}"
# create an instance of BidResponseWithoutBidsStatusRow from a JSON string
bid_response_without_bids_status_row_instance = BidResponseWithoutBidsStatusRow.from_json(json)
# print the JSON string representation of the object
print(BidResponseWithoutBidsStatusRow.to_json())

# convert the object into a dict
bid_response_without_bids_status_row_dict = bid_response_without_bids_status_row_instance.to_dict()
# create an instance of BidResponseWithoutBidsStatusRow from a dict
bid_response_without_bids_status_row_from_dict = BidResponseWithoutBidsStatusRow.from_dict(bid_response_without_bids_status_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


