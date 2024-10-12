# ListAuctionPackagesResponse

Response message for listing auction packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auction_packages** | [**List[AuctionPackage]**](AuctionPackage.md) | The list of auction packages. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the &#x60;ListAuctionPackages&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_auction_packages_response import ListAuctionPackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuctionPackagesResponse from a JSON string
list_auction_packages_response_instance = ListAuctionPackagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAuctionPackagesResponse.to_json())

# convert the object into a dict
list_auction_packages_response_dict = list_auction_packages_response_instance.to_dict()
# create an instance of ListAuctionPackagesResponse from a dict
list_auction_packages_response_from_dict = ListAuctionPackagesResponse.from_dict(list_auction_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


