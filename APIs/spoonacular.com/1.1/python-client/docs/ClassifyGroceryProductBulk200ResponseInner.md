# ClassifyGroceryProductBulk200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breadcrumbs** | **List[str]** |  | 
**category** | **str** |  | 
**clean_title** | **str** |  | 
**image** | **str** |  | 
**usda_code** | **int** |  | 

## Example

```python
from openapi_client.models.classify_grocery_product_bulk200_response_inner import ClassifyGroceryProductBulk200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyGroceryProductBulk200ResponseInner from a JSON string
classify_grocery_product_bulk200_response_inner_instance = ClassifyGroceryProductBulk200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ClassifyGroceryProductBulk200ResponseInner.to_json())

# convert the object into a dict
classify_grocery_product_bulk200_response_inner_dict = classify_grocery_product_bulk200_response_inner_instance.to_dict()
# create an instance of ClassifyGroceryProductBulk200ResponseInner from a dict
classify_grocery_product_bulk200_response_inner_from_dict = ClassifyGroceryProductBulk200ResponseInner.from_dict(classify_grocery_product_bulk200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


