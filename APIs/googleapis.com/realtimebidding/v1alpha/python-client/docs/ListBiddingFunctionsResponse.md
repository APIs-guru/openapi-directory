# ListBiddingFunctionsResponse

A response containing a list of a bidder's bidding functions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bidding_functions** | [**List[BiddingFunction]**](BiddingFunction.md) | A list of a bidder&#39;s bidding functions. | [optional] 
**next_page_token** | **str** | A token which can be passed to a subsequent call to the &#x60;ListBiddingFunctions&#x60; method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_bidding_functions_response import ListBiddingFunctionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBiddingFunctionsResponse from a JSON string
list_bidding_functions_response_instance = ListBiddingFunctionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBiddingFunctionsResponse.to_json())

# convert the object into a dict
list_bidding_functions_response_dict = list_bidding_functions_response_instance.to_dict()
# create an instance of ListBiddingFunctionsResponse from a dict
list_bidding_functions_response_from_dict = ListBiddingFunctionsResponse.from_dict(list_bidding_functions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


