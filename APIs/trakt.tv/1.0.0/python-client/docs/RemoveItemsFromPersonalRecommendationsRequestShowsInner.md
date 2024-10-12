# RemoveItemsFromPersonalRecommendationsRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | [optional] 
**title** | **str** |  | [optional] 
**year** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.remove_items_from_personal_recommendations_request_shows_inner import RemoveItemsFromPersonalRecommendationsRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromPersonalRecommendationsRequestShowsInner from a JSON string
remove_items_from_personal_recommendations_request_shows_inner_instance = RemoveItemsFromPersonalRecommendationsRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromPersonalRecommendationsRequestShowsInner.to_json())

# convert the object into a dict
remove_items_from_personal_recommendations_request_shows_inner_dict = remove_items_from_personal_recommendations_request_shows_inner_instance.to_dict()
# create an instance of RemoveItemsFromPersonalRecommendationsRequestShowsInner from a dict
remove_items_from_personal_recommendations_request_shows_inner_from_dict = RemoveItemsFromPersonalRecommendationsRequestShowsInner.from_dict(remove_items_from_personal_recommendations_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


