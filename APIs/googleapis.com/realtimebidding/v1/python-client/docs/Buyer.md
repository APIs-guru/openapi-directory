# Buyer

RTB Buyer account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_creative_count** | **str** | Output only. The number of creatives that this buyer submitted through the API or bid with in the last 30 days. This is counted against the maximum number of active creatives. | [optional] [readonly] 
**bidder** | **str** | Output only. The name of the bidder resource that is responsible for receiving bidding traffic for this account. The bidder name must follow the pattern &#x60;bidders/{bidderAccountId}&#x60;, where &#x60;{bidderAccountId}&#x60; is the account ID of the bidder receiving traffic for this buyer. | [optional] [readonly] 
**billing_ids** | **List[str]** | Output only. A list of billing IDs associated with this account. These IDs appear on: 1. A bid request, to signal which buyers are eligible to bid on a given opportunity, and which pretargeting configurations were matched for each eligible buyer. 2. The bid response, to attribute a winning impression to a specific account for billing, reporting, policy and publisher block enforcement. | [optional] [readonly] 
**display_name** | **str** | Output only. The diplay name associated with this buyer account, as visible to sellers. | [optional] [readonly] 
**maximum_active_creative_count** | **str** | Output only. The maximum number of active creatives that this buyer can have. | [optional] [readonly] 
**name** | **str** | Output only. Name of the buyer resource that must follow the pattern &#x60;buyers/{buyerAccountId}&#x60;, where &#x60;{buyerAccountId}&#x60; is the account ID of the buyer account whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. | [optional] [readonly] 

## Example

```python
from openapi_client.models.buyer import Buyer

# TODO update the JSON string below
json = "{}"
# create an instance of Buyer from a JSON string
buyer_instance = Buyer.from_json(json)
# print the JSON string representation of the object
print(Buyer.to_json())

# convert the object into a dict
buyer_dict = buyer_instance.to_dict()
# create an instance of Buyer from a dict
buyer_from_dict = Buyer.from_dict(buyer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


