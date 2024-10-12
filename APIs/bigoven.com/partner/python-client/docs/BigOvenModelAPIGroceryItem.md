# BigOvenModelAPIGroceryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_oven_object** | **str** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**department** | **str** |  | [optional] 
**display_quantity** | **str** |  | [optional] 
**guid** | **str** |  | [optional] 
**is_checked** | **bool** |  | [optional] 
**item_id** | **int** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**local_status** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**third_party_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_grocery_item import BigOvenModelAPIGroceryItem

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIGroceryItem from a JSON string
big_oven_model_api_grocery_item_instance = BigOvenModelAPIGroceryItem.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIGroceryItem.to_json())

# convert the object into a dict
big_oven_model_api_grocery_item_dict = big_oven_model_api_grocery_item_instance.to_dict()
# create an instance of BigOvenModelAPIGroceryItem from a dict
big_oven_model_api_grocery_item_from_dict = BigOvenModelAPIGroceryItem.from_dict(big_oven_model_api_grocery_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


