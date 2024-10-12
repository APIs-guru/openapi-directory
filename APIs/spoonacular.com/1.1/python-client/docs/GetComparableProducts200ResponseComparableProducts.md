# GetComparableProducts200ResponseComparableProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calories** | **List[object]** |  | 
**likes** | **List[object]** |  | 
**price** | **List[object]** |  | 
**protein** | [**List[GetComparableProducts200ResponseComparableProductsProteinInner]**](GetComparableProducts200ResponseComparableProductsProteinInner.md) |  | 
**spoonacular_score** | [**List[GetComparableProducts200ResponseComparableProductsProteinInner]**](GetComparableProducts200ResponseComparableProductsProteinInner.md) |  | 
**sugar** | **List[object]** |  | 

## Example

```python
from openapi_client.models.get_comparable_products200_response_comparable_products import GetComparableProducts200ResponseComparableProducts

# TODO update the JSON string below
json = "{}"
# create an instance of GetComparableProducts200ResponseComparableProducts from a JSON string
get_comparable_products200_response_comparable_products_instance = GetComparableProducts200ResponseComparableProducts.from_json(json)
# print the JSON string representation of the object
print(GetComparableProducts200ResponseComparableProducts.to_json())

# convert the object into a dict
get_comparable_products200_response_comparable_products_dict = get_comparable_products200_response_comparable_products_instance.to_dict()
# create an instance of GetComparableProducts200ResponseComparableProducts from a dict
get_comparable_products200_response_comparable_products_from_dict = GetComparableProducts200ResponseComparableProducts.from_dict(get_comparable_products200_response_comparable_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


