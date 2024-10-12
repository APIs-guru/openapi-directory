# RemoveItemsFromPersonalRecommendationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**movies** | [**List[RemoveItemsFromCollectionRequestMoviesInner]**](RemoveItemsFromCollectionRequestMoviesInner.md) |  | [optional] 
**shows** | [**List[RemoveItemsFromPersonalRecommendationsRequestShowsInner]**](RemoveItemsFromPersonalRecommendationsRequestShowsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_items_from_personal_recommendations_request import RemoveItemsFromPersonalRecommendationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveItemsFromPersonalRecommendationsRequest from a JSON string
remove_items_from_personal_recommendations_request_instance = RemoveItemsFromPersonalRecommendationsRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveItemsFromPersonalRecommendationsRequest.to_json())

# convert the object into a dict
remove_items_from_personal_recommendations_request_dict = remove_items_from_personal_recommendations_request_instance.to_dict()
# create an instance of RemoveItemsFromPersonalRecommendationsRequest from a dict
remove_items_from_personal_recommendations_request_from_dict = RemoveItemsFromPersonalRecommendationsRequest.from_dict(remove_items_from_personal_recommendations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


