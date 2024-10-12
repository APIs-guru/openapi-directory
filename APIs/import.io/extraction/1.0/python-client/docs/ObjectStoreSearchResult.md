# ObjectStoreSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**ObjectStoreSearchResultHits**](ObjectStoreSearchResultHits.md) |  | [optional] 
**timed_out** | **bool** |  | [optional] 
**took** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.object_store_search_result import ObjectStoreSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectStoreSearchResult from a JSON string
object_store_search_result_instance = ObjectStoreSearchResult.from_json(json)
# print the JSON string representation of the object
print(ObjectStoreSearchResult.to_json())

# convert the object into a dict
object_store_search_result_dict = object_store_search_result_instance.to_dict()
# create an instance of ObjectStoreSearchResult from a dict
object_store_search_result_from_dict = ObjectStoreSearchResult.from_dict(object_store_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


