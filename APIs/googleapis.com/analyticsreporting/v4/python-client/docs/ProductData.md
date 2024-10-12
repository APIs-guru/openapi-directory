# ProductData

Details of the products in an e-commerce transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_revenue** | **float** | The total revenue from purchased product items. | [optional] 
**product_name** | **str** | The product name, supplied by the e-commerce tracking application, for the purchased items. | [optional] 
**product_quantity** | **str** | Total number of this product units in the transaction. | [optional] 
**product_sku** | **str** | Unique code that represents the product. | [optional] 

## Example

```python
from openapi_client.models.product_data import ProductData

# TODO update the JSON string below
json = "{}"
# create an instance of ProductData from a JSON string
product_data_instance = ProductData.from_json(json)
# print the JSON string representation of the object
print(ProductData.to_json())

# convert the object into a dict
product_data_dict = product_data_instance.to_dict()
# create an instance of ProductData from a dict
product_data_from_dict = ProductData.from_dict(product_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


