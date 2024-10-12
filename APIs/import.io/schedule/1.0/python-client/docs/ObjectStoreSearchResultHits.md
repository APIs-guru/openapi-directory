# ObjectStoreSearchResultHits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**List[ObjectStoreSearchResultHitsHitsInner]**](ObjectStoreSearchResultHitsHitsInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.object_store_search_result_hits import ObjectStoreSearchResultHits

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStoreSearchResultHits from a JSON string
object_store_search_result_hits_instance = ObjectStoreSearchResultHits.from_json(json)
# print the JSON string representation of the object
print(ObjectStoreSearchResultHits.to_json())

# convert the object into a dict
object_store_search_result_hits_dict = object_store_search_result_hits_instance.to_dict()
# create an instance of ObjectStoreSearchResultHits from a dict
object_store_search_result_hits_from_dict = ObjectStoreSearchResultHits.from_dict(object_store_search_result_hits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


