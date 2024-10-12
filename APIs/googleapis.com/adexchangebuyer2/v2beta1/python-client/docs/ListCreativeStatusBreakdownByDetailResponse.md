# ListCreativeStatusBreakdownByDetailResponse

Response message for listing all details associated with a given filtered bid reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_type** | **str** | The type of detail that the detail IDs represent. | [optional] 
**filtered_bid_detail_rows** | [**List[FilteredBidDetailRow]**](FilteredBidDetailRow.md) | List of rows, with counts of bids with a given creative status aggregated by detail. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_creative_status_breakdown_by_detail_response import ListCreativeStatusBreakdownByDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreativeStatusBreakdownByDetailResponse from a JSON string
list_creative_status_breakdown_by_detail_response_instance = ListCreativeStatusBreakdownByDetailResponse.from_json(json)
# print the JSON string representation of the object
print(ListCreativeStatusBreakdownByDetailResponse.to_json())

# convert the object into a dict
list_creative_status_breakdown_by_detail_response_dict = list_creative_status_breakdown_by_detail_response_instance.to_dict()
# create an instance of ListCreativeStatusBreakdownByDetailResponse from a dict
list_creative_status_breakdown_by_detail_response_from_dict = ListCreativeStatusBreakdownByDetailResponse.from_dict(list_creative_status_breakdown_by_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


