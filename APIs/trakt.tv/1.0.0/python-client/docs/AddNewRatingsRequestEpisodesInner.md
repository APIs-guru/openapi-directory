# AddNewRatingsRequestEpisodesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestEpisodesInnerIds**](AddItemsToCollectionRequestEpisodesInnerIds.md) |  | [optional] 
**rating** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_new_ratings_request_episodes_inner import AddNewRatingsRequestEpisodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequestEpisodesInner from a JSON string
add_new_ratings_request_episodes_inner_instance = AddNewRatingsRequestEpisodesInner.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequestEpisodesInner.to_json())

# convert the object into a dict
add_new_ratings_request_episodes_inner_dict = add_new_ratings_request_episodes_inner_instance.to_dict()
# create an instance of AddNewRatingsRequestEpisodesInner from a dict
add_new_ratings_request_episodes_inner_from_dict = AddNewRatingsRequestEpisodesInner.from_dict(add_new_ratings_request_episodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


