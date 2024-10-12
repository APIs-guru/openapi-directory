# OpportunityProductEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**discount** | [**List[Discount]**](Discount.md) | Discount | [optional] 
**id** | **str** | OpportunityProduct Identifier | [optional] 
**list_price** | **float** | List Price | [optional] 
**name** | **str** | Name | [optional] 
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
from openapi_client.models.opportunity_product_entity import OpportunityProductEntity

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityProductEntity from a JSON string
opportunity_product_entity_instance = OpportunityProductEntity.from_json(json)
# print the JSON string representation of the object
print(OpportunityProductEntity.to_json())

# convert the object into a dict
opportunity_product_entity_dict = opportunity_product_entity_instance.to_dict()
# create an instance of OpportunityProductEntity from a dict
opportunity_product_entity_from_dict = OpportunityProductEntity.from_dict(opportunity_product_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


