# ListCreativeStatusBreakdownByCreativeResponse

Response message for listing all creatives associated with a given filtered bid reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtered_bid_creative_rows** | [**List[FilteredBidCreativeRow]**](FilteredBidCreativeRow.md) | List of rows, with counts of bids with a given creative status aggregated by creative. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_creative_status_breakdown_by_creative_response import ListCreativeStatusBreakdownByCreativeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreativeStatusBreakdownByCreativeResponse from a JSON string
list_creative_status_breakdown_by_creative_response_instance = ListCreativeStatusBreakdownByCreativeResponse.from_json(json)
# print the JSON string representation of the object
print(ListCreativeStatusBreakdownByCreativeResponse.to_json())

# convert the object into a dict
list_creative_status_breakdown_by_creative_response_dict = list_creative_status_breakdown_by_creative_response_instance.to_dict()
# create an instance of ListCreativeStatusBreakdownByCreativeResponse from a dict
list_creative_status_breakdown_by_creative_response_from_dict = ListCreativeStatusBreakdownByCreativeResponse.from_dict(list_creative_status_breakdown_by_creative_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


