# CheckIntoAnItemRequestMovieIds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imdb** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**tmdb** | **float** |  | [optional] 
**trakt** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.check_into_an_item_request_movie_ids import CheckIntoAnItemRequestMovieIds

# TODO update the JSON string below
json = "{}"
# create an instance of CheckIntoAnItemRequestMovieIds from a JSON string
check_into_an_item_request_movie_ids_instance = CheckIntoAnItemRequestMovieIds.from_json(json)
# print the JSON string representation of the object
print(CheckIntoAnItemRequestMovieIds.to_json())

# convert the object into a dict
check_into_an_item_request_movie_ids_dict = check_into_an_item_request_movie_ids_instance.to_dict()
# create an instance of CheckIntoAnItemRequestMovieIds from a dict
check_into_an_item_request_movie_ids_from_dict = CheckIntoAnItemRequestMovieIds.from_dict(check_into_an_item_request_movie_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


