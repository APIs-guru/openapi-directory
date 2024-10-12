# ListFilteredBidRequestsResponse

Response message for listing all reasons that bid requests were filtered and not sent to the buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callout_status_rows** | [**List[CalloutStatusRow]**](CalloutStatusRow.md) | List of rows, with counts of filtered bid requests aggregated by callout status. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_filtered_bid_requests_response import ListFilteredBidRequestsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFilteredBidRequestsResponse from a JSON string
list_filtered_bid_requests_response_instance = ListFilteredBidRequestsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFilteredBidRequestsResponse.to_json())

# convert the object into a dict
list_filtered_bid_requests_response_dict = list_filtered_bid_requests_response_instance.to_dict()
# create an instance of ListFilteredBidRequestsResponse from a dict
list_filtered_bid_requests_response_from_dict = ListFilteredBidRequestsResponse.from_dict(list_filtered_bid_requests_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


