# AddNewRatingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**List[AddNewRatingsRequestEpisodesInner]**](AddNewRatingsRequestEpisodesInner.md) |  | [optional] 
**movies** | [**List[AddNewRatingsRequestMoviesInner]**](AddNewRatingsRequestMoviesInner.md) |  | [optional] 
**seasons** | [**List[AddNewRatingsRequestSeasonsInner]**](AddNewRatingsRequestSeasonsInner.md) |  | [optional] 
**shows** | [**List[AddNewRatingsRequestShowsInner]**](AddNewRatingsRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_new_ratings_request import AddNewRatingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequest from a JSON string
add_new_ratings_request_instance = AddNewRatingsRequest.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequest.to_json())

# convert the object into a dict
add_new_ratings_request_dict = add_new_ratings_request_instance.to_dict()
# create an instance of AddNewRatingsRequest from a dict
add_new_ratings_request_from_dict = AddNewRatingsRequest.from_dict(add_new_ratings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


