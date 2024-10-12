# CreateKeywordRequest

A type that defines the fields for the <b>CreateKeyword</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can call the  &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\&quot;&gt;getAdGroups&lt;/a&gt; method to retrieve the ad group IDs for a seller, and &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/keywords/methods/getKeywords\&quot;&gt;getKeywords&lt;/a&gt; to retrieve the keyword IDs for a seller&#39;s keywords.&lt;/span&gt; | [optional] 
**bid** | [**Amount**](Amount.md) |  | [optional] 
**keyword_text** | **str** | Input the keyword into this field. | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.create_keyword_request import CreateKeywordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateKeywordRequest from a JSON string
create_keyword_request_instance = CreateKeywordRequest.from_json(json)
# print the JSON string representation of the object
print(CreateKeywordRequest.to_json())

# convert the object into a dict
create_keyword_request_dict = create_keyword_request_instance.to_dict()
# create an instance of CreateKeywordRequest from a dict
create_keyword_request_from_dict = CreateKeywordRequest.from_dict(create_keyword_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


