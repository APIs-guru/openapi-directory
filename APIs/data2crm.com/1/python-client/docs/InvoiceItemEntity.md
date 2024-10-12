# InvoiceItemEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**discount** | [**List[Discount]**](Discount.md) | Discount | [optional] 
**id** | **str** | InvoiceItem Identifier | [optional] 
**list_price** | **float** | List Price | [optional] 
**number** | **str** | Number | [optional] 
**quantity** | **float** | Quantity | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**sales_price** | **float** | Sales Price | [optional] 
**subtotal** | **float** | Subtotal | [optional] 
**tax** | [**List[Tax]**](Tax.md) | Tax | [optional] 
**total_price** | **float** | Total Price | [optional] 
**unit** | **str** | Unit | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.invoice_item_entity import InvoiceItemEntity

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItemEntity from a JSON string
invoice_item_entity_instance = InvoiceItemEntity.from_json(json)
# print the JSON string representation of the object
print(InvoiceItemEntity.to_json())

# convert the object into a dict
invoice_item_entity_dict = invoice_item_entity_instance.to_dict()
# create an instance of InvoiceItemEntity from a dict
invoice_item_entity_from_dict = InvoiceItemEntity.from_dict(invoice_item_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


