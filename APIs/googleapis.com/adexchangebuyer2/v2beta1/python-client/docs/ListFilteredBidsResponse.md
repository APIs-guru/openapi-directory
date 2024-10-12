# ListFilteredBidsResponse

Response message for listing all reasons that bids were filtered from the auction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_status_rows** | [**List[CreativeStatusRow]**](CreativeStatusRow.md) | List of rows, with counts of filtered bids aggregated by filtering reason (for example, creative status). | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_filtered_bids_response import ListFilteredBidsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFilteredBidsResponse from a JSON string
list_filtered_bids_response_instance = ListFilteredBidsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFilteredBidsResponse.to_json())

# convert the object into a dict
list_filtered_bids_response_dict = list_filtered_bids_response_instance.to_dict()
# create an instance of ListFilteredBidsResponse from a dict
list_filtered_bids_response_from_dict = ListFilteredBidsResponse.from_dict(list_filtered_bids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


