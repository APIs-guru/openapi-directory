# SearchCustomFoods200ResponseCustomFoodsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**image_url** | **str** |  | 
**price** | **float** |  | 
**servings** | **float** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.search_custom_foods200_response_custom_foods_inner import SearchCustomFoods200ResponseCustomFoodsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchCustomFoods200ResponseCustomFoodsInner from a JSON string
search_custom_foods200_response_custom_foods_inner_instance = SearchCustomFoods200ResponseCustomFoodsInner.from_json(json)
# print the JSON string representation of the object
print(SearchCustomFoods200ResponseCustomFoodsInner.to_json())

# convert the object into a dict
search_custom_foods200_response_custom_foods_inner_dict = search_custom_foods200_response_custom_foods_inner_instance.to_dict()
# create an instance of SearchCustomFoods200ResponseCustomFoodsInner from a dict
search_custom_foods200_response_custom_foods_inner_from_dict = SearchCustomFoods200ResponseCustomFoodsInner.from_dict(search_custom_foods200_response_custom_foods_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


