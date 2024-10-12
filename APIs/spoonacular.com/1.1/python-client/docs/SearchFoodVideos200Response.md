# SearchFoodVideos200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_results** | **int** |  | 
**videos** | [**List[SearchFoodVideos200ResponseVideosInner]**](SearchFoodVideos200ResponseVideosInner.md) |  | 

## Example

```python
from openapi_client.models.search_food_videos200_response import SearchFoodVideos200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFoodVideos200Response from a JSON string
search_food_videos200_response_instance = SearchFoodVideos200Response.from_json(json)
# print the JSON string representation of the object
print(SearchFoodVideos200Response.to_json())

# convert the object into a dict
search_food_videos200_response_dict = search_food_videos200_response_instance.to_dict()
# create an instance of SearchFoodVideos200Response from a dict
search_food_videos200_response_from_dict = SearchFoodVideos200Response.from_dict(search_food_videos200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


