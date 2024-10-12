# Keyword

A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class=\"tablenote\"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | This field identifies the ad group that the keyword is associated with. | [optional] 
**bid** | [**Amount**](Amount.md) |  | [optional] 
**keyword_id** | **str** | The unique identifier of a keyword. | [optional] 
**keyword_status** | **str** | The status of the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;ARCHIVED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**keyword_text** | **str** | The text of the keyword. | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.keyword import Keyword

# TODO update the JSON string below
json = "{}"
# create an instance of Keyword from a JSON string
keyword_instance = Keyword.from_json(json)
# print the JSON string representation of the object
print(Keyword.to_json())

# convert the object into a dict
keyword_dict = keyword_instance.to_dict()
# create an instance of Keyword from a dict
keyword_from_dict = Keyword.from_dict(keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


