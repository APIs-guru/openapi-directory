# SearchMenuItems200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menu_items** | [**List[SearchMenuItems200ResponseMenuItemsInner]**](SearchMenuItems200ResponseMenuItemsInner.md) |  | 
**number** | **int** |  | 
**offset** | **int** |  | 
**total_menu_items** | **int** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.search_menu_items200_response import SearchMenuItems200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchMenuItems200Response from a JSON string
search_menu_items200_response_instance = SearchMenuItems200Response.from_json(json)
# print the JSON string representation of the object
print(SearchMenuItems200Response.to_json())

# convert the object into a dict
search_menu_items200_response_dict = search_menu_items200_response_instance.to_dict()
# create an instance of SearchMenuItems200Response from a dict
search_menu_items200_response_from_dict = SearchMenuItems200Response.from_dict(search_menu_items200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


