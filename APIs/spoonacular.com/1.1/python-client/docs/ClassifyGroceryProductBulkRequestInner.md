# ClassifyGroceryProductBulkRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plu_code** | **str** |  | 
**title** | **str** |  | 
**upc** | **str** |  | 

## Example

```python
from openapi_client.models.classify_grocery_product_bulk_request_inner import ClassifyGroceryProductBulkRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyGroceryProductBulkRequestInner from a JSON string
classify_grocery_product_bulk_request_inner_instance = ClassifyGroceryProductBulkRequestInner.from_json(json)
# print the JSON string representation of the object
print(ClassifyGroceryProductBulkRequestInner.to_json())

# convert the object into a dict
classify_grocery_product_bulk_request_inner_dict = classify_grocery_product_bulk_request_inner_instance.to_dict()
# create an instance of ClassifyGroceryProductBulkRequestInner from a dict
classify_grocery_product_bulk_request_inner_from_dict = ClassifyGroceryProductBulkRequestInner.from_dict(classify_grocery_product_bulk_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


