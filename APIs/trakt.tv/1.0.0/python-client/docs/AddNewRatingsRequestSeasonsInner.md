# AddNewRatingsRequestSeasonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestSeasonsInnerIds**](AddItemsToCollectionRequestSeasonsInnerIds.md) |  | [optional] 
**rating** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_new_ratings_request_seasons_inner import AddNewRatingsRequestSeasonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewRatingsRequestSeasonsInner from a JSON string
add_new_ratings_request_seasons_inner_instance = AddNewRatingsRequestSeasonsInner.from_json(json)
# print the JSON string representation of the object
print(AddNewRatingsRequestSeasonsInner.to_json())

# convert the object into a dict
add_new_ratings_request_seasons_inner_dict = add_new_ratings_request_seasons_inner_instance.to_dict()
# create an instance of AddNewRatingsRequestSeasonsInner from a dict
add_new_ratings_request_seasons_inner_from_dict = AddNewRatingsRequestSeasonsInner.from_dict(add_new_ratings_request_seasons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


