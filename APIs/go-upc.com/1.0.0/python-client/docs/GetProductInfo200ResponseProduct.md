# GetProductInfo200ResponseProduct

all matching product details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | The brand of the product (if available). | [optional] 
**category** | **str** | The category of the product (if available). | [optional] 
**description** | **str** | A description of the product (if available). | [optional] 
**ean** | **int** | The EAN code of the product. | [optional] 
**image_url** | **str** | The URL for the product image. | [optional] 
**name** | **str** | The name of the product. | [optional] 
**region** | **str** | The region of the product. | [optional] 
**specs** | **List[List[str]]** | A list of additional item specifications (if available). | [optional] 
**upc** | **int** | The UPC code of the product. | [optional] 

## Example

```python
from openapi_client.models.get_product_info200_response_product import GetProductInfo200ResponseProduct

# TODO update the JSON string below
json = "{}"
# create an instance of GetProductInfo200ResponseProduct from a JSON string
get_product_info200_response_product_instance = GetProductInfo200ResponseProduct.from_json(json)
# print the JSON string representation of the object
print(GetProductInfo200ResponseProduct.to_json())

# convert the object into a dict
get_product_info200_response_product_dict = get_product_info200_response_product_instance.to_dict()
# create an instance of GetProductInfo200ResponseProduct from a dict
get_product_info200_response_product_from_dict = GetProductInfo200ResponseProduct.from_dict(get_product_info200_response_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


