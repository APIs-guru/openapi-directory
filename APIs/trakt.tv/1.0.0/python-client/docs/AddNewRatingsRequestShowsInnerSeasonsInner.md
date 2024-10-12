# AddNewRatingsRequestShowsInnerSeasonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddNewRatingsRequestShowsInnerSeasonsInnerEpisodesInner]**](AddNewRatingsRequestShowsInnerSeasonsInnerEpisodesInner.md) |  | [optional] 
**number** | **float** |  | 
**rating** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_new_ratings_request_shows_inner_seasons_inner import AddNewRatingsRequestShowsInnerSeasonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequestShowsInnerSeasonsInner from a JSON string
add_new_ratings_request_shows_inner_seasons_inner_instance = AddNewRatingsRequestShowsInnerSeasonsInner.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequestShowsInnerSeasonsInner.to_json())

# convert the object into a dict
add_new_ratings_request_shows_inner_seasons_inner_dict = add_new_ratings_request_shows_inner_seasons_inner_instance.to_dict()
# create an instance of AddNewRatingsRequestShowsInnerSeasonsInner from a dict
add_new_ratings_request_shows_inner_seasons_inner_from_dict = AddNewRatingsRequestShowsInnerSeasonsInner.from_dict(add_new_ratings_request_shows_inner_seasons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


