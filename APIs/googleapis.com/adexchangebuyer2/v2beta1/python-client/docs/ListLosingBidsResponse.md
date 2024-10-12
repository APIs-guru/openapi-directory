# ListLosingBidsResponse

Response message for listing all reasons that bids lost in the auction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_status_rows** | [**List[CreativeStatusRow]**](CreativeStatusRow.md) | List of rows, with counts of losing bids aggregated by loss reason (for example, creative status). | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_losing_bids_response import ListLosingBidsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLosingBidsResponse from a JSON string
list_losing_bids_response_instance = ListLosingBidsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLosingBidsResponse.to_json())

# convert the object into a dict
list_losing_bids_response_dict = list_losing_bids_response_instance.to_dict()
# create an instance of ListLosingBidsResponse from a dict
list_losing_bids_response_from_dict = ListLosingBidsResponse.from_dict(list_losing_bids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


