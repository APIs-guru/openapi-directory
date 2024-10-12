# SuggestedBids

The suggested bid rate for the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword_text** | **str** | The text for the keyword. | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**proposed_bid** | [**ProposedBid**](ProposedBid.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_bids import SuggestedBids

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedBids from a JSON string
suggested_bids_instance = SuggestedBids.from_json(json)
# print the JSON string representation of the object
print(SuggestedBids.to_json())

# convert the object into a dict
suggested_bids_dict = suggested_bids_instance.to_dict()
# create an instance of SuggestedBids from a dict
suggested_bids_from_dict = SuggestedBids.from_dict(suggested_bids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


