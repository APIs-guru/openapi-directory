# ListNonBillableWinningBidsResponse

Response message for listing all reasons for which a buyer was not billed for a winning bid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results. | [optional] 
**non_billable_winning_bid_status_rows** | [**List[NonBillableWinningBidStatusRow]**](NonBillableWinningBidStatusRow.md) | List of rows, with counts of bids not billed aggregated by reason. | [optional] 

## Example

```python
from openapi_client.models.list_non_billable_winning_bids_response import ListNonBillableWinningBidsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNonBillableWinningBidsResponse from a JSON string
list_non_billable_winning_bids_response_instance = ListNonBillableWinningBidsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNonBillableWinningBidsResponse.to_json())

# convert the object into a dict
list_non_billable_winning_bids_response_dict = list_non_billable_winning_bids_response_instance.to_dict()
# create an instance of ListNonBillableWinningBidsResponse from a dict
list_non_billable_winning_bids_response_from_dict = ListNonBillableWinningBidsResponse.from_dict(list_non_billable_winning_bids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


