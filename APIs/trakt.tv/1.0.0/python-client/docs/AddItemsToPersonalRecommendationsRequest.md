# AddItemsToPersonalRecommendationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**movies** | [**List[AddItemsToPersonalRecommendationsRequestMoviesInner]**](AddItemsToPersonalRecommendationsRequestMoviesInner.md) |  | [optional] 
**shows** | [**List[AddItemsToPersonalRecommendationsRequestShowsInner]**](AddItemsToPersonalRecommendationsRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_items_to_personal_recommendations_request import AddItemsToPersonalRecommendationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddItemsToPersonalRecommendationsRequest from a JSON string
add_items_to_personal_recommendations_request_instance = AddItemsToPersonalRecommendationsRequest.from_json(json)
# print the JSON string representation of the object
print(AddItemsToPersonalRecommendationsRequest.to_json())

# convert the object into a dict
add_items_to_personal_recommendations_request_dict = add_items_to_personal_recommendations_request_instance.to_dict()
# create an instance of AddItemsToPersonalRecommendationsRequest from a dict
add_items_to_personal_recommendations_request_from_dict = AddItemsToPersonalRecommendationsRequest.from_dict(add_items_to_personal_recommendations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


