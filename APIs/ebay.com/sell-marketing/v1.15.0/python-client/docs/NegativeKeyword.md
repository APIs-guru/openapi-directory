# NegativeKeyword

A type that defines the fields for a negative keyword.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | An ad group ID that is generated when an ad group is first created and associated with a campaign.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can call the  &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\&quot;&gt;getAdGroups&lt;/a&gt; method to retrieve the ad group IDs for a seller.&lt;/span&gt; | [optional] 
**campaign_id** | **str** | A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. | [optional] 
**negative_keyword_id** | **str** | A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. | [optional] 
**negative_keyword_match_type** | **str** | A field that defines the match type for the negative keyword.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; Broad matching of negative keywords is not currently supported.&lt;/span&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**negative_keyword_status** | **str** | A field that defines the status of the negative keyword. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**negative_keyword_text** | **str** | The text for the negative keyword. | [optional] 

## Example

```python
from openapi_client.models.negative_keyword import NegativeKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeyword from a JSON string
negative_keyword_instance = NegativeKeyword.from_json(json)
# print the JSON string representation of the object
print(NegativeKeyword.to_json())

# convert the object into a dict
negative_keyword_dict = negative_keyword_instance.to_dict()
# create an instance of NegativeKeyword from a dict
negative_keyword_from_dict = NegativeKeyword.from_dict(negative_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


