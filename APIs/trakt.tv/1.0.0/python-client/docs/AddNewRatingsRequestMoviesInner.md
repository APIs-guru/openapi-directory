# AddNewRatingsRequestMoviesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | 
**rated_at** | **str** |  | [optional] 
**rating** | **float** |  | 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_new_ratings_request_movies_inner import AddNewRatingsRequestMoviesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequestMoviesInner from a JSON string
add_new_ratings_request_movies_inner_instance = AddNewRatingsRequestMoviesInner.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequestMoviesInner.to_json())

# convert the object into a dict
add_new_ratings_request_movies_inner_dict = add_new_ratings_request_movies_inner_instance.to_dict()
# create an instance of AddNewRatingsRequestMoviesInner from a dict
add_new_ratings_request_movies_inner_from_dict = AddNewRatingsRequestMoviesInner.from_dict(add_new_ratings_request_movies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


