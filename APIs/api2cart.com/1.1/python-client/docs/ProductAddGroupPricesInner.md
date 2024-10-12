# ProductAddGroupPricesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_add_group_prices_inner import ProductAddGroupPricesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAddGroupPricesInner from a JSON string
product_add_group_prices_inner_instance = ProductAddGroupPricesInner.from_json(json)
# print the JSON string representation of the object
print(ProductAddGroupPricesInner.to_json())

# convert the object into a dict
product_add_group_prices_inner_dict = product_add_group_prices_inner_instance.to_dict()
# create an instance of ProductAddGroupPricesInner from a dict
product_add_group_prices_inner_from_dict = ProductAddGroupPricesInner.from_dict(product_add_group_prices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


