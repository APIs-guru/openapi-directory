# UpdatePrivateAuctionProposalRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_deal_id** | **str** | The externalDealId of the deal to be updated. | [optional] 
**note** | [**MarketplaceNote**](MarketplaceNote.md) |  | [optional] 
**proposal_revision_number** | **str** | The current revision number of the proposal to be updated. | [optional] 
**update_action** | **str** | The proposed action on the private auction proposal. | [optional] 

## Example

```python
from openapi_client.models.update_private_auction_proposal_request import UpdatePrivateAuctionProposalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePrivateAuctionProposalRequest from a JSON string
update_private_auction_proposal_request_instance = UpdatePrivateAuctionProposalRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePrivateAuctionProposalRequest.to_json())

# convert the object into a dict
update_private_auction_proposal_request_dict = update_private_auction_proposal_request_instance.to_dict()
# create an instance of UpdatePrivateAuctionProposalRequest from a dict
update_private_auction_proposal_request_from_dict = UpdatePrivateAuctionProposalRequest.from_dict(update_private_auction_proposal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


