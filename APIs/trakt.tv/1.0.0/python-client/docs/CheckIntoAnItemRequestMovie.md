# CheckIntoAnItemRequestMovie


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**CheckIntoAnItemRequestMovieIds**](CheckIntoAnItemRequestMovieIds.md) |  | [optional] 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.check_into_an_item_request_movie import CheckIntoAnItemRequestMovie

# TODO update the JSON string below
json = "{}"
# create an instance of CheckIntoAnItemRequestMovie from a JSON string
check_into_an_item_request_movie_instance = CheckIntoAnItemRequestMovie.from_json(json)
# print the JSON string representation of the object
print(CheckIntoAnItemRequestMovie.to_json())

# convert the object into a dict
check_into_an_item_request_movie_dict = check_into_an_item_request_movie_instance.to_dict()
# create an instance of CheckIntoAnItemRequestMovie from a dict
check_into_an_item_request_movie_from_dict = CheckIntoAnItemRequestMovie.from_dict(check_into_an_item_request_movie_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


