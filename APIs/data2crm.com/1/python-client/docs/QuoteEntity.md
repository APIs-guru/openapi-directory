# QuoteEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**adjustment** | **float** | Adjustment | [optional] 
**carrier** | **str** | Carrier | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**discount** | [**List[Discount]**](Discount.md) | Discount | [optional] 
**expiration_date** | **date** | Expiration Date | [optional] 
**grand_total** | **float** | Grand Total | [optional] 
**id** | **str** | Quote Identifier | [optional] 
**number** | **str** | Number | [optional] 
**payment_terms** | **str** | Payment Terms | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
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
from openapi_client.models.quote_entity import QuoteEntity

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteEntity from a JSON string
quote_entity_instance = QuoteEntity.from_json(json)
# print the JSON string representation of the object
print(QuoteEntity.to_json())

# convert the object into a dict
quote_entity_dict = quote_entity_instance.to_dict()
# create an instance of QuoteEntity from a dict
quote_entity_from_dict = QuoteEntity.from_dict(quote_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


