# KeywordPagedCollectionResponse

A type that defines the keywords of the paged collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**keywords** | [**List[Keyword]**](Keyword.md) | This array contains all of the keywords that match the request criteria. Keywords will be sorted by adGroupId, regardless of whether you searched for keywords across the entire campaign, or if you searched for keywords within one or specific ad groups. | [optional] 
**limit** | **int** | The number of keywords returned on a single page from the result set. This value can be set in the request with the &lt;b&gt;limit&lt;/b&gt; query parameter. | [optional] 
**next** | **str** | The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter. &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note: &lt;/strong&gt;The items in a paginated result set use a zero-based list where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/p&gt; | [optional] 
**prev** | **str** | The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**total** | **int** | The total number of keywords retrieved in the result set.  &lt;br&gt;&lt;br&gt;If no keywords are found, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.keyword_paged_collection_response import KeywordPagedCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordPagedCollectionResponse from a JSON string
keyword_paged_collection_response_instance = KeywordPagedCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(KeywordPagedCollectionResponse.to_json())

# convert the object into a dict
keyword_paged_collection_response_dict = keyword_paged_collection_response_instance.to_dict()
# create an instance of KeywordPagedCollectionResponse from a dict
keyword_paged_collection_response_from_dict = KeywordPagedCollectionResponse.from_dict(keyword_paged_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


