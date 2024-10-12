# SearchItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_base64** | **str** |  | [optional] 
**group** | **int** |  | [optional] 
**guid** | **str** |  | [optional] 
**index** | **int** |  | [optional] 
**index_db** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**seen** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.search_item import SearchItem

# TODO update the JSON string below
json = "{}"
# create an instance of SearchItem from a JSON string
search_item_instance = SearchItem.from_json(json)
# print the JSON string representation of the object
print(SearchItem.to_json())

# convert the object into a dict
search_item_dict = search_item_instance.to_dict()
# create an instance of SearchItem from a dict
search_item_from_dict = SearchItem.from_dict(search_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


