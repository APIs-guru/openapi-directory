# AddItemsToPersonalRecommendationsRequestShowsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | [**AddItemsToCollectionRequestShowsInnerIds**](AddItemsToCollectionRequestShowsInnerIds.md) |  | 
**notes** | **str** |  | [optional] 
**title** | **str** |  | 
**year** | **float** |  | 

## Example

```python
from openapi_client.models.add_items_to_personal_recommendations_request_shows_inner import AddItemsToPersonalRecommendationsRequestShowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToPersonalRecommendationsRequestShowsInner from a JSON string
add_items_to_personal_recommendations_request_shows_inner_instance = AddItemsToPersonalRecommendationsRequestShowsInner.from_json(json)
# print the JSON string representation of the object
print(AddItemsToPersonalRecommendationsRequestShowsInner.to_json())

# convert the object into a dict
add_items_to_personal_recommendations_request_shows_inner_dict = add_items_to_personal_recommendations_request_shows_inner_instance.to_dict()
# create an instance of AddItemsToPersonalRecommendationsRequestShowsInner from a dict
add_items_to_personal_recommendations_request_shows_inner_from_dict = AddItemsToPersonalRecommendationsRequestShowsInner.from_dict(add_items_to_personal_recommendations_request_shows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


