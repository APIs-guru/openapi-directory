# ProductEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **str** | Barcode of the product | [optional] 
**categories** | [**List[CategoryFields]**](CategoryFields.md) |  | [optional] 
**description** | **str** | Description of the product | [optional] 
**diameter** | **float** | Diameter of the product | [optional] 
**featured** | **bool** | True if the product is featured | [optional] [default to False]
**google_product_category** | **str** | Category of a Product based on the Google product taxonomy | [optional] 
**height** | **float** | Height of the product | [optional] 
**length** | **float** | Length of the product | [optional] 
**meta_description** | **str** | SEO meta description of the product | [optional] 
**name** | **str** | Name of the product | 
**package_format** | **str** | Format the product package | [optional] [default to 'box']
**page_title** | **str** | SEO title of the product | [optional] 
**permalink** | **str** | Product unique URL path | [optional] 
**price** | **float** | Price of the product | 
**shipping_required** | **bool** | False if the product is digital | [optional] [default to True]
**sku** | **str** | Stock Keeping Unit of the product | [optional] 
**status** | **str** | Status of the product | [optional] [default to 'available']
**stock** | **int** | Quantity in stock for the product | [optional] [default to 100]
**stock_unlimited** | **bool** | True if the Product has unlimited stock | [optional] 
**weight** | **float** | Weight of the product | [optional] [default to 1]
**width** | **float** | Width of the product | [optional] 

## Example

```python
from openapi_client.models.product_edit_fields import ProductEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductEditFields from a JSON string
product_edit_fields_instance = ProductEditFields.from_json(json)
# print the JSON string representation of the object
print(ProductEditFields.to_json())

# convert the object into a dict
product_edit_fields_dict = product_edit_fields_instance.to_dict()
# create an instance of ProductEditFields from a dict
product_edit_fields_from_dict = ProductEditFields.from_dict(product_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


