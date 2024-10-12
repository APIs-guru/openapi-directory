# Proposal

Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_buyer** | **str** | Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : &#x60;buyers/{buyerAccountId}&#x60; | [optional] [readonly] 
**buyer** | **str** | Output only. Refers to a buyer in The Realtime-bidding API. Format: &#x60;buyers/{buyerAccountId}&#x60; | [optional] [readonly] 
**buyer_contacts** | [**List[Contact]**](Contact.md) | Contact information for the buyer. | [optional] 
**buyer_private_data** | [**PrivateData**](PrivateData.md) |  | [optional] 
**client** | **str** | Output only. Refers to a Client. Format: &#x60;buyers/{buyerAccountId}/clients/{clientAccountid}&#x60; | [optional] [readonly] 
**deal_type** | **str** | Output only. Type of deal the proposal contains. | [optional] [readonly] 
**display_name** | **str** | Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal. | [optional] [readonly] 
**is_renegotiating** | **bool** | Output only. True if the proposal was previously finalized and is now being renegotiated. | [optional] [readonly] 
**last_updater_or_commentor_role** | **str** | Output only. The role of the last user that either updated the proposal or left a comment. | [optional] [readonly] 
**name** | **str** | Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} | [optional] 
**notes** | [**List[Note]**](Note.md) | A list of notes from the buyer and the seller attached to this proposal. | [optional] 
**originator_role** | **str** | Output only. Indicates whether the buyer/seller created the proposal. | [optional] [readonly] 
**pausing_consented** | **bool** | Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers. | [optional] 
**proposal_revision** | **str** | Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. | [optional] [readonly] 
**publisher_profile** | **str** | Immutable. Reference to the seller on the proposal. Format: &#x60;buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}&#x60; Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. | [optional] 
**seller_contacts** | [**List[Contact]**](Contact.md) | Output only. Contact information for the seller. | [optional] [readonly] 
**state** | **str** | Output only. Indicates the state of the proposal. | [optional] [readonly] 
**terms_and_conditions** | **str** | Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it. | [optional] [readonly] 
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


