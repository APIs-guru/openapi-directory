# TargetedKeywordRequest

A type that provides details for the targeted keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | **List[str]** | A field used to indicate whether additional information and insight data shall be provided for suggested keywords.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Valid Value:&lt;/strong&gt; &lt;code&gt;KEYWORD_INSIGHTS&lt;/code&gt; | [optional] 
**exclusions** | **List[str]** | A field used to indicate that the keywords already selected by sellers for the specified listing IDs should be filtered out of the response, and only new and unique keyword recommendations shall be returned.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Valid Value:&lt;/strong&gt; &lt;code&gt;ADOPTED_KEYWORDS&lt;/code&gt; | [optional] 
**listing_ids** | **List[str]** | A set of comma-separated listing IDs in the paginated collection. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Maximum number of listings requested: &lt;/b&gt;300 | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.targeted_keyword_request import TargetedKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TargetedKeywordRequest from a JSON string
targeted_keyword_request_instance = TargetedKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(TargetedKeywordRequest.to_json())

# convert the object into a dict
targeted_keyword_request_dict = targeted_keyword_request_instance.to_dict()
# create an instance of TargetedKeywordRequest from a dict
targeted_keyword_request_from_dict = TargetedKeywordRequest.from_dict(targeted_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


