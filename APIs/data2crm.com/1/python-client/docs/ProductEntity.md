# ProductEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **List[str]** | Category | [optional] 
**code** | **str** | Code | [optional] 
**cost** | [**List[Cost]**](Cost.md) | Cost | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**id** | **str** | Product Identifier | [optional] 
**image** | [**List[Image]**](Image.md) | Image | [optional] 
**is_active** | **bool** | Is active | [optional] 
**is_taxable** | **bool** | Is taxable | [optional] 
**manufacturer** | **str** | Manufacturer | [optional] 
**name** | **str** | Name | [optional] 
**price** | [**List[Price]**](Price.md) | Price | [optional] 
**quantity_in_demand** | **float** | Quantity In Demand | [optional] 
**quantity_in_stock** | **float** | Quantity In Stock | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**reorder_level** | **float** | Reorder Level | [optional] 
**sales_ended_at** | **datetime** | Sales Ended At | [optional] 
**sales_started_at** | **datetime** | Sales Started At | [optional] 
**support_ended_at** | **datetime** | Support Ended At | [optional] 
**support_started_at** | **datetime** | Support Started At | [optional] 
**type** | **str** | Type | [optional] 
**unit** | **str** | Unit | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**url** | **str** | URL | [optional] 
**vendor** | **str** | Vendor | [optional] 

## Example

```python
from openapi_client.models.product_entity import ProductEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ProductEntity from a JSON string
product_entity_instance = ProductEntity.from_json(json)
# print the JSON string representation of the object
print(ProductEntity.to_json())

# convert the object into a dict
product_entity_dict = product_entity_instance.to_dict()
# create an instance of ProductEntity from a dict
product_entity_from_dict = ProductEntity.from_dict(product_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


