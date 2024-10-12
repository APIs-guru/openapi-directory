# ListBiddersResponse

A response containing bidders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bidders** | [**List[Bidder]**](Bidder.md) | List of bidders. | [optional] 
**next_page_token** | **str** | A token which can be passed to a subsequent call to the &#x60;ListBidders&#x60; method to retrieve the next page of results in ListBiddersRequest.pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_bidders_response import ListBiddersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBiddersResponse from a JSON string
list_bidders_response_instance = ListBiddersResponse.from_json(json)
# print the JSON string representation of the object
print(ListBiddersResponse.to_json())

# convert the object into a dict
list_bidders_response_dict = list_bidders_response_instance.to_dict()
# create an instance of ListBiddersResponse from a dict
list_bidders_response_from_dict = ListBiddersResponse.from_dict(list_bidders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


