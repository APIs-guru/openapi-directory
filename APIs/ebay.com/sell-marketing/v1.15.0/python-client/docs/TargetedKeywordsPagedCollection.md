# TargetedKeywordsPagedCollection

A type that defines the keywords of the paged collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_keywords** | [**List[SuggestedKeywords]**](SuggestedKeywords.md) | A list of suggested keywords in the paged collection. &lt;p&gt; &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; A relevancy check with items already present in the ad-group is performed even if item IDs associated with the ad-group are not explicitly passed in the request.&lt;/span&gt;&lt;/p&gt;  | [optional] 

## Example

```python
from openapi_client.models.targeted_keywords_paged_collection import TargetedKeywordsPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TargetedKeywordsPagedCollection from a JSON string
targeted_keywords_paged_collection_instance = TargetedKeywordsPagedCollection.from_json(json)
# print the JSON string representation of the object
print(TargetedKeywordsPagedCollection.to_json())

# convert the object into a dict
targeted_keywords_paged_collection_dict = targeted_keywords_paged_collection_instance.to_dict()
# create an instance of TargetedKeywordsPagedCollection from a dict
targeted_keywords_paged_collection_from_dict = TargetedKeywordsPagedCollection.from_dict(targeted_keywords_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


