# SearchResults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demo** | **bool** |  | [optional] 
**face_per_sec** | **int** |  | [optional] [readonly] 
**free_ram** | **float** |  | [optional] 
**images_in_bundle** | **int** |  | [optional] 
**items** | [**List[SearchItem]**](SearchItem.md) |  | [optional] 
**max_score** | **int** |  | [optional] [readonly] 
**performance** | **str** |  | [optional] [readonly] 
**scaned_till_index** | **int** |  | [optional] 
**searched_faces** | **int** |  | [optional] 
**took_seconds** | **float** |  | [optional] 
**took_seconds_download** | **float** |  | [optional] 
**took_seconds_queue** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.search_results import SearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResults from a JSON string
search_results_instance = SearchResults.from_json(json)
# print the JSON string representation of the object
print(SearchResults.to_json())

# convert the object into a dict
search_results_dict = search_results_instance.to_dict()
# create an instance of SearchResults from a dict
search_results_from_dict = SearchResults.from_dict(search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


