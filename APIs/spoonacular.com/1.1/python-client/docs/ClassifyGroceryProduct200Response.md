# ClassifyGroceryProduct200Response



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
from openapi_client.models.classify_grocery_product200_response import ClassifyGroceryProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyGroceryProduct200Response from a JSON string
classify_grocery_product200_response_instance = ClassifyGroceryProduct200Response.from_json(json)
# print the JSON string representation of the object
print(ClassifyGroceryProduct200Response.to_json())

# convert the object into a dict
classify_grocery_product200_response_dict = classify_grocery_product200_response_instance.to_dict()
# create an instance of ClassifyGroceryProduct200Response from a dict
classify_grocery_product200_response_from_dict = ClassifyGroceryProduct200Response.from_dict(classify_grocery_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


