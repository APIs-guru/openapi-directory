# DocumentItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gross_amount** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**net_amount** | **float** |  | [optional] 
**net_unit_amount** | **float** |  | [optional] 
**product_id** | **int** |  | [optional] 
**quantity** | **float** |  | [optional] 
**vat** | [**Vat**](Vat.md) |  | [optional] 
**vat_amount** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.document_item import DocumentItem

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentItem from a JSON string
document_item_instance = DocumentItem.from_json(json)
# print the JSON string representation of the object
print(DocumentItem.to_json())

# convert the object into a dict
document_item_dict = document_item_instance.to_dict()
# create an instance of DocumentItem from a dict
document_item_from_dict = DocumentItem.from_dict(document_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


