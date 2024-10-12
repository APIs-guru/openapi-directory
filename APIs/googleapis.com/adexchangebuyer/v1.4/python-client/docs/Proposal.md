# Proposal

Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:  (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Optional contact information of the buyer. (seller-readonly) | [optional] 
**buyer_private_data** | [**PrivateData**](PrivateData.md) |  | [optional] 
**dbm_advertiser_ids** | **List[str]** | IDs of DBM advertisers permission to this proposal. | [optional] 
**has_buyer_signed_off** | **bool** | When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly) | [optional] 
**has_seller_signed_off** | **bool** | When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly) | [optional] 
**inventory_source** | **str** | What exchange will provide this inventory (readonly, except on create). | [optional] 
**is_renegotiating** | **bool** | True if the proposal is being renegotiated (readonly). | [optional] 
**is_setup_complete** | **bool** | True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;adexchangebuyer#proposal\&quot;. | [optional] [default to 'adexchangebuyer#proposal']
**labels** | [**List[MarketplaceLabel]**](MarketplaceLabel.md) | List of labels associated with the proposal. (readonly) | [optional] 
**last_updater_or_commentor_role** | **str** | The role of the last user that either updated the proposal or left a comment. (readonly) | [optional] 
**name** | **str** | The name for the proposal (updatable) | [optional] 
**negotiation_id** | **str** | Optional negotiation id if this proposal is a preferred deal proposal. | [optional] 
**originator_role** | **str** | Indicates whether the buyer/seller created the proposal.(readonly) | [optional] 
**private_auction_id** | **str** | Optional private auction id if this proposal is a private auction proposal. | [optional] 
**proposal_id** | **str** | The unique id of the proposal. (readonly). | [optional] 
**proposal_state** | **str** | The current state of the proposal. (readonly) | [optional] 
**revision_number** | **str** | The revision number for the proposal (readonly). | [optional] 
**revision_time_ms** | **str** | The time (ms since epoch) when the proposal was last revised (readonly). | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**seller_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Optional contact information of the seller (buyer-readonly). | [optional] 

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


