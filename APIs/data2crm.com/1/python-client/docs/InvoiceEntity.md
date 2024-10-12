# InvoiceEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**adjustment** | **float** | Adjustment | [optional] 
**balance** | **float** | Balance | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**discount** | [**List[Discount]**](Discount.md) | Discount | [optional] 
**due_date** | **date** | Due Date | [optional] 
**excise_duty** | **float** | Excise Duty | [optional] 
**grand_total** | **float** | Grand Total | [optional] 
**id** | **str** | Invoice Identifier | [optional] 
**invoice_date** | **date** | Invoice Date | [optional] 
**number** | **str** | Number | [optional] 
**purchase_order** | **str** | Purchase Order | [optional] 
**received** | **float** | Received | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**sales_commission** | **float** | Sales Commission | [optional] 
**shipping_and_handling** | **float** | Shipping And Handling | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Subject | [optional] 
**subtotal** | **float** | Subtotal | [optional] 
**tax** | [**List[Tax]**](Tax.md) | Tax | [optional] 
**terms_and_conditions** | **str** | Terms And Conditions | [optional] 
**total_price** | **float** | Total Price | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.invoice_entity import InvoiceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceEntity from a JSON string
invoice_entity_instance = InvoiceEntity.from_json(json)
# print the JSON string representation of the object
print(InvoiceEntity.to_json())

# convert the object into a dict
invoice_entity_dict = invoice_entity_instance.to_dict()
# create an instance of InvoiceEntity from a dict
invoice_entity_from_dict = InvoiceEntity.from_dict(invoice_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


