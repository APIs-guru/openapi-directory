# Proposal

Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Contact information for the buyer. | [optional] 
**buyer_private_data** | [**PrivateData**](PrivateData.md) |  | [optional] 
**deals** | [**List[Deal]**](Deal.md) | The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal. | [optional] 
**display_name** | **str** | The name for the proposal. | [optional] 
**is_renegotiating** | **bool** | Output only. True if the proposal is being renegotiated. | [optional] [readonly] 
**is_setup_complete** | **bool** | Output only. True, if the buyside inventory setup is complete for this proposal. | [optional] [readonly] 
**last_updater_or_commentor_role** | **str** | Output only. The role of the last user that either updated the proposal or left a comment. | [optional] [readonly] 
**notes** | [**List[Note]**](Note.md) | Output only. The notes associated with this proposal. | [optional] [readonly] 
**originator_role** | **str** | Output only. Indicates whether the buyer/seller created the proposal. | [optional] [readonly] 
**private_auction_id** | **str** | Output only. Private auction ID if this proposal is a private auction proposal. | [optional] [readonly] 
**proposal_id** | **str** | Output only. The unique ID of the proposal. | [optional] [readonly] 
**proposal_revision** | **str** | Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. | [optional] [readonly] 
**proposal_state** | **str** | Output only. The current state of the proposal. | [optional] [readonly] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**seller_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Output only. Contact information for the seller. | [optional] [readonly] 
**terms_and_conditions** | **str** | Output only. The terms and conditions set by the publisher for this proposal. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the proposal was last revised. | [optional] [readonly] 

## Example

```python
from openapi_client.models.proposal import Proposal

# TODO update the JSON string below
json = "{}"
# create an instance of Proposal from a JSON string
proposal_instance = Proposal.from_json(json)
# print the JSON string representation of the object
print(Proposal.to_json())

# convert the object into a dict
proposal_dict = proposal_instance.to_dict()
# create an instance of Proposal from a dict
proposal_from_dict = Proposal.from_dict(proposal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


