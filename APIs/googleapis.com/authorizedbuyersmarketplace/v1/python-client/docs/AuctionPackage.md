# AuctionPackage

Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the auction package was created. | [optional] [readonly] 
**creator** | **str** | Output only. The buyer that created this auction package. Format: &#x60;buyers/{buyerAccountId}&#x60; | [optional] [readonly] 
**description** | **str** | Output only. A description of the auction package. | [optional] [readonly] 
**display_name** | **str** | The display_name assigned to the auction package. | [optional] 
**name** | **str** | Immutable. The unique identifier for the auction package. Format: &#x60;buyers/{accountId}/auctionPackages/{auctionPackageId}&#x60; The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse. | [optional] 
**subscribed_clients** | **List[str]** | Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: &#x60;buyers/{buyerAccountId}/clients/{clientAccountId}&#x60; | [optional] [readonly] 
**update_time** | **str** | Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.auction_package import AuctionPackage

# TODO update the JSON string below
json = "{}"
# create an instance of AuctionPackage from a JSON string
auction_package_instance = AuctionPackage.from_json(json)
# print the JSON string representation of the object
print(AuctionPackage.to_json())

# convert the object into a dict
auction_package_dict = auction_package_instance.to_dict()
# create an instance of AuctionPackage from a dict
auction_package_from_dict = AuctionPackage.from_dict(auction_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


