# DocumentInsertItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **int** |  | 
**quantity** | **float** |  | 
**comment** | **str** |  | [optional] 
**name** | **str** |  | 
**unit** | **str** |  | 
**unit_price** | **float** |  | 
**unit_price_type** | [**UnitPriceType**](UnitPriceType.md) |  | 
**vat** | [**Vat**](Vat.md) |  | 

## Example

```python
from openapi_client.models.document_insert_items_inner import DocumentInsertItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentInsertItemsInner from a JSON string
document_insert_items_inner_instance = DocumentInsertItemsInner.from_json(json)
# print the JSON string representation of the object
print(DocumentInsertItemsInner.to_json())

# convert the object into a dict
document_insert_items_inner_dict = document_insert_items_inner_instance.to_dict()
# create an instance of DocumentInsertItemsInner from a dict
document_insert_items_inner_from_dict = DocumentInsertItemsInner.from_dict(document_insert_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


