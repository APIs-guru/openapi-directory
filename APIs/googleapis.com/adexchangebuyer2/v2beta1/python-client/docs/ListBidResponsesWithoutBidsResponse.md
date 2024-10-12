# ListBidResponsesWithoutBidsResponse

Response message for listing all reasons that bid responses were considered to have no applicable bids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_response_without_bids_status_rows** | [**List[BidResponseWithoutBidsStatusRow]**](BidResponseWithoutBidsStatusRow.md) | List of rows, with counts of bid responses without bids aggregated by status. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_bid_responses_without_bids_response import ListBidResponsesWithoutBidsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBidResponsesWithoutBidsResponse from a JSON string
list_bid_responses_without_bids_response_instance = ListBidResponsesWithoutBidsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBidResponsesWithoutBidsResponse.to_json())

# convert the object into a dict
list_bid_responses_without_bids_response_dict = list_bid_responses_without_bids_response_instance.to_dict()
# create an instance of ListBidResponsesWithoutBidsResponse from a dict
list_bid_responses_without_bids_response_from_dict = ListBidResponsesWithoutBidsResponse.from_dict(list_bid_responses_without_bids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


