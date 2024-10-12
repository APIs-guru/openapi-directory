# NegativeKeywordPagedCollectionResponse

A type that defines the negative keywords, returned in a paged collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the &lt;b&gt;limit&lt;/b&gt; query parameter. | [optional] 
**negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | A list of negative keywords returned in the paginated collection. | [optional] 
**next** | **str** | The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;0&lt;/code&gt;&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;The items in a paginated result set use a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 
**prev** | **str** | The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. | [optional] 
**total** | **int** | The total number of result sets in the paginated collection. | [optional] 

## Example

```python
from openapi_client.models.negative_keyword_paged_collection_response import NegativeKeywordPagedCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeywordPagedCollectionResponse from a JSON string
negative_keyword_paged_collection_response_instance = NegativeKeywordPagedCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(NegativeKeywordPagedCollectionResponse.to_json())

# convert the object into a dict
negative_keyword_paged_collection_response_dict = negative_keyword_paged_collection_response_instance.to_dict()
# create an instance of NegativeKeywordPagedCollectionResponse from a dict
negative_keyword_paged_collection_response_from_dict = NegativeKeywordPagedCollectionResponse.from_dict(negative_keyword_paged_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


