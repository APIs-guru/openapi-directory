# NegativeKeywordResponse

A type that defines the negative keyword response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign. | [optional] 
**campaign_id** | **str** | A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. | [optional] 
**errors** | [**List[Error]**](Error.md) | This container will be returned if there is an issue creating the corresponding negative keyword. | [optional] 
**href** | **str** | The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword. | [optional] 
**negative_keyword_id** | **str** | A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword. | [optional] 
**negative_keyword_match_type** | **str** | The match type for the negative keyword.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; Broad matching of negative keywords is not currently supported.&lt;/span&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;EXACT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PHRASE&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**negative_keyword_text** | **str** | The text for the negative keyword. | [optional] 
**status_code** | **int** | The status of the request to create a negative keyword. This field indicates whether the process was successful or not. | [optional] 

## Example

```python
from openapi_client.models.negative_keyword_response import NegativeKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeywordResponse from a JSON string
negative_keyword_response_instance = NegativeKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(NegativeKeywordResponse.to_json())

# convert the object into a dict
negative_keyword_response_dict = negative_keyword_response_instance.to_dict()
# create an instance of NegativeKeywordResponse from a dict
negative_keyword_response_from_dict = NegativeKeywordResponse.from_dict(negative_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


