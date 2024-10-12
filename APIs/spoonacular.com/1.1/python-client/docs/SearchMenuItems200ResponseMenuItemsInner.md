# SearchMenuItems200ResponseMenuItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**image** | **str** |  | 
**image_type** | **str** |  | 
**restaurant_chain** | **str** |  | 
**servings** | [**SearchMenuItems200ResponseMenuItemsInnerServings**](SearchMenuItems200ResponseMenuItemsInnerServings.md) |  | [optional] 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.search_menu_items200_response_menu_items_inner import SearchMenuItems200ResponseMenuItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchMenuItems200ResponseMenuItemsInner from a JSON string
search_menu_items200_response_menu_items_inner_instance = SearchMenuItems200ResponseMenuItemsInner.from_json(json)
# print the JSON string representation of the object
print(SearchMenuItems200ResponseMenuItemsInner.to_json())

# convert the object into a dict
search_menu_items200_response_menu_items_inner_dict = search_menu_items200_response_menu_items_inner_instance.to_dict()
# create an instance of SearchMenuItems200ResponseMenuItemsInner from a dict
search_menu_items200_response_menu_items_inner_from_dict = SearchMenuItems200ResponseMenuItemsInner.from_dict(search_menu_items200_response_menu_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


