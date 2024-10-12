# MovieInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**imdb_id** | **str** |  | [optional] 
**release_year** | **str** |  | [optional] 
**runtime** | **str** |  | [optional] 
**synopsis** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.movie_information import MovieInformation

# TODO update the JSON string below
json = "{}"
# create an instance of MovieInformation from a JSON string
movie_information_instance = MovieInformation.from_json(json)
# print the JSON string representation of the object
print(MovieInformation.to_json())

# convert the object into a dict
movie_information_dict = movie_information_instance.to_dict()
# create an instance of MovieInformation from a dict
movie_information_from_dict = MovieInformation.from_dict(movie_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


