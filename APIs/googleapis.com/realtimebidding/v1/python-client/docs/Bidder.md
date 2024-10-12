# Bidder

Bidder settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bypass_nonguaranteed_deals_pretargeting** | **bool** | Output only. An option to bypass pretargeting for private auctions and preferred deals. When true, bid requests from these nonguaranteed deals will always be sent. When false, bid requests will be subject to regular pretargeting configurations. Programmatic Guaranteed deals will always be sent to the bidder, regardless of the value for this flag. Auction packages are not impacted by this value and are subject to the regular pretargeting configurations. | [optional] [readonly] 
**cookie_matching_network_id** | **str** | Output only. The buyer&#39;s network ID used for cookie matching. This ID corresponds to the &#x60;google_nid&#x60; parameter in the URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. | [optional] [readonly] 
**cookie_matching_url** | **str** | Output only. The base URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. | [optional] [readonly] 
**deals_billing_id** | **str** | Output only. The billing ID for the deals pretargeting config. This billing ID is sent on the bid request for guaranteed and nonguaranteed deals matched in pretargeting. | [optional] [readonly] 
**name** | **str** | Output only. Name of the bidder resource that must follow the pattern &#x60;bidders/{bidderAccountId}&#x60;, where &#x60;{bidderAccountId}&#x60; is the account ID of the bidder whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bidder import Bidder

# TODO update the JSON string below
json = "{}"
# create an instance of Bidder from a JSON string
bidder_instance = Bidder.from_json(json)
# print the JSON string representation of the object
print(Bidder.to_json())

# convert the object into a dict
bidder_dict = bidder_instance.to_dict()
# create an instance of Bidder from a dict
bidder_from_dict = Bidder.from_dict(bidder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


