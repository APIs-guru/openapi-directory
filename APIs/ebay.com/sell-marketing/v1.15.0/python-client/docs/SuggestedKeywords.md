# SuggestedKeywords

The suggested keywords for the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[AdditionalInfo]**](AdditionalInfo.md) | A container for the additional information and compiled insight data for suggested keywords.  | [optional] 
**keyword_text** | **str** | The text for the keyword. | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.suggested_keywords import SuggestedKeywords

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedKeywords from a JSON string
suggested_keywords_instance = SuggestedKeywords.from_json(json)
# print the JSON string representation of the object
print(SuggestedKeywords.to_json())

# convert the object into a dict
suggested_keywords_dict = suggested_keywords_instance.to_dict()
# create an instance of SuggestedKeywords from a dict
suggested_keywords_from_dict = SuggestedKeywords.from_dict(suggested_keywords_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


