# Grocery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_ingredients** | **str** | Active ingredients. | [optional] 
**alcohol_by_volume** | **float** | Alcohol by volume. | [optional] 
**allergens** | **str** | Allergens. | [optional] 
**derived_nutrition_claim** | **List[str]** | Derived nutrition claim. | [optional] 
**directions** | **str** | Directions. | [optional] 
**indications** | **str** | Indications. | [optional] 
**ingredients** | **str** | Ingredients. | [optional] 
**nutrition_claim** | **List[str]** | Nutrition claim. | [optional] 
**storage_instructions** | **str** | Storage instructions. | [optional] 

## Example

```python
from openapi_client.models.grocery import Grocery

# TODO update the JSON string below
json = "{}"
# create an instance of Grocery from a JSON string
grocery_instance = Grocery.from_json(json)
# print the JSON string representation of the object
print(Grocery.to_json())

# convert the object into a dict
grocery_dict = grocery_instance.to_dict()
# create an instance of Grocery from a dict
grocery_from_dict = Grocery.from_dict(grocery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


