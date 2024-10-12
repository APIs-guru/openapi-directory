# DocumentProductData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | [optional] 
**name** | **str** |  | 
**quantity** | **float** |  | 
**unit** | **str** |  | 
**unit_price** | **float** |  | 
**unit_price_type** | [**UnitPriceType**](UnitPriceType.md) |  | 
**vat** | [**Vat**](Vat.md) |  | 

## Example

```python
from openapi_client.models.document_product_data import DocumentProductData

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentProductData from a JSON string
document_product_data_instance = DocumentProductData.from_json(json)
# print the JSON string representation of the object
print(DocumentProductData.to_json())

# convert the object into a dict
document_product_data_dict = document_product_data_instance.to_dict()
# create an instance of DocumentProductData from a dict
document_product_data_from_dict = DocumentProductData.from_dict(document_product_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


