# KeywordRequest

A type that defines the fields used by the <b>Keyword</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword_text** | **str** | The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum number of characters: &lt;/b&gt;100 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum number of words: &lt;/b&gt;10  | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.keyword_request import KeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordRequest from a JSON string
keyword_request_instance = KeywordRequest.from_json(json)
# print the JSON string representation of the object
print(KeywordRequest.to_json())

# convert the object into a dict
keyword_request_dict = keyword_request_instance.to_dict()
# create an instance of KeywordRequest from a dict
keyword_request_from_dict = KeywordRequest.from_dict(keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


