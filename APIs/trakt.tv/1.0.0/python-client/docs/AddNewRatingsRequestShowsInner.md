# AddNewRatingsRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**rating** | **float** |  | [optional] 
**seasons** | [**List[AddNewRatingsRequestShowsInnerSeasonsInner]**](AddNewRatingsRequestShowsInnerSeasonsInner.md) |  | 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_new_ratings_request_shows_inner import AddNewRatingsRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequestShowsInner from a JSON string
add_new_ratings_request_shows_inner_instance = AddNewRatingsRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequestShowsInner.to_json())

# convert the object into a dict
add_new_ratings_request_shows_inner_dict = add_new_ratings_request_shows_inner_instance.to_dict()
# create an instance of AddNewRatingsRequestShowsInner from a dict
add_new_ratings_request_shows_inner_from_dict = AddNewRatingsRequestShowsInner.from_dict(add_new_ratings_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


