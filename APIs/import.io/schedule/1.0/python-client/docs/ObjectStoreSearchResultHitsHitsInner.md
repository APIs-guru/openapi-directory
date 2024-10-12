# ObjectStoreSearchResultHitsHitsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**fields** | [**CrawlRun**](CrawlRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.object_store_search_result_hits_hits_inner import ObjectStoreSearchResultHitsHitsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStoreSearchResultHitsHitsInner from a JSON string
object_store_search_result_hits_hits_inner_instance = ObjectStoreSearchResultHitsHitsInner.from_json(json)
# print the JSON string representation of the object
print(ObjectStoreSearchResultHitsHitsInner.to_json())

# convert the object into a dict
object_store_search_result_hits_hits_inner_dict = object_store_search_result_hits_hits_inner_instance.to_dict()
# create an instance of ObjectStoreSearchResultHitsHitsInner from a dict
object_store_search_result_hits_hits_inner_from_dict = ObjectStoreSearchResultHitsHitsInner.from_dict(object_store_search_result_hits_hits_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


