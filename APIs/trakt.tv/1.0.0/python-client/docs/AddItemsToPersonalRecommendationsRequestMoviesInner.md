# AddItemsToPersonalRecommendationsRequestMoviesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | 
**notes** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_personal_recommendations_request_movies_inner import AddItemsToPersonalRecommendationsRequestMoviesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToPersonalRecommendationsRequestMoviesInner from a JSON string
add_items_to_personal_recommendations_request_movies_inner_instance = AddItemsToPersonalRecommendationsRequestMoviesInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToPersonalRecommendationsRequestMoviesInner.to_json())

# convert the object into a dict
add_items_to_personal_recommendations_request_movies_inner_dict = add_items_to_personal_recommendations_request_movies_inner_instance.to_dict()
# create an instance of AddItemsToPersonalRecommendationsRequestMoviesInner from a dict
add_items_to_personal_recommendations_request_movies_inner_from_dict = AddItemsToPersonalRecommendationsRequestMoviesInner.from_dict(add_items_to_personal_recommendations_request_movies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


