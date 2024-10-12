# ListBidResponseErrorsResponse

Response message for listing all reasons that bid responses resulted in an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callout_status_rows** | [**List[CalloutStatusRow]**](CalloutStatusRow.md) | List of rows, with counts of bid responses aggregated by callout status. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_bid_response_errors_response import ListBidResponseErrorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBidResponseErrorsResponse from a JSON string
list_bid_response_errors_response_instance = ListBidResponseErrorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBidResponseErrorsResponse.to_json())

# convert the object into a dict
list_bid_response_errors_response_dict = list_bid_response_errors_response_instance.to_dict()
# create an instance of ListBidResponseErrorsResponse from a dict
list_bid_response_errors_response_from_dict = ListBidResponseErrorsResponse.from_dict(list_bid_response_errors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


