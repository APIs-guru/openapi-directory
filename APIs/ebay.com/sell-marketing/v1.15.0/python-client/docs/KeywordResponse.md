# KeywordResponse

A type that defines the response fields used by the <b>Keyword</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | The identifier of the ad group that the keyword was added to. | [optional] 
**errors** | [**List[Error]**](Error.md) | This container will be returned if there is an issue creating the corresponding keyword and/or adding that keyword to the corresponding ad group. | [optional] 
**href** | **str** | The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword. | [optional] 
**keyword_id** | **str** | A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword. | [optional] 
**keyword_text** | **str** | The text of the keyword. | [optional] 
**match_type** | **str** | A field that defines the match type for the keyword.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;BROAD&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status_code** | **int** | An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group. | [optional] 

## Example

```python
from openapi_client.models.keyword_response import KeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordResponse from a JSON string
keyword_response_instance = KeywordResponse.from_json(json)
# print the JSON string representation of the object
print(KeywordResponse.to_json())

# convert the object into a dict
keyword_response_dict = keyword_response_instance.to_dict()
# create an instance of KeywordResponse from a dict
keyword_response_from_dict = KeywordResponse.from_dict(keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


