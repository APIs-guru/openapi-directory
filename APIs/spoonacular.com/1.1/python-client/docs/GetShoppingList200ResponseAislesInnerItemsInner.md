# GetShoppingList200ResponseAislesInnerItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**cost** | **float** |  | 
**id** | **int** |  | 
**ingredient_id** | **int** |  | 
**measures** | [**GetShoppingList200ResponseAislesInnerItemsInnerMeasures**](GetShoppingList200ResponseAislesInnerItemsInnerMeasures.md) |  | [optional] 
**name** | **str** |  | 
**pantry_item** | **bool** |  | 

## Example

```python
from openapi_client.models.get_shopping_list200_response_aisles_inner_items_inner import GetShoppingList200ResponseAislesInnerItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetShoppingList200ResponseAislesInnerItemsInner from a JSON string
get_shopping_list200_response_aisles_inner_items_inner_instance = GetShoppingList200ResponseAislesInnerItemsInner.from_json(json)
# print the JSON string representation of the object
print(GetShoppingList200ResponseAislesInnerItemsInner.to_json())

# convert the object into a dict
get_shopping_list200_response_aisles_inner_items_inner_dict = get_shopping_list200_response_aisles_inner_items_inner_instance.to_dict()
# create an instance of GetShoppingList200ResponseAislesInnerItemsInner from a dict
get_shopping_list200_response_aisles_inner_items_inner_from_dict = GetShoppingList200ResponseAislesInnerItemsInner.from_dict(get_shopping_list200_response_aisles_inner_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


