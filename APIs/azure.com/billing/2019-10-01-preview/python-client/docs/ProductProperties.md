# ProductProperties

The properties of the product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_id** | **str** | Availability Id. | [optional] [readonly] 
**billing_frequency** | **str** | Billing frequency. | [optional] 
**billing_profile_display_name** | **str** | Billing Profile display name to which this product belongs. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing Profile id to which this product belongs. | [optional] [readonly] 
**customer_display_name** | **str** | Display name of customer to which this product belongs. | [optional] [readonly] 
**customer_id** | **str** | Customer id to which this product belongs. | [optional] [readonly] 
**display_name** | **str** | The display name of the product. | [optional] [readonly] 
**end_date** | **datetime** | end date. | [optional] [readonly] 
**invoice_section_display_name** | **str** | Invoice section display name to which this product belongs. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice section id to which this product belongs. | [optional] [readonly] 
**last_charge** | [**Amount**](Amount.md) |  | [optional] 
**last_charge_date** | **datetime** | The date of the last charge. | [optional] [readonly] 
**parent_product_id** | **str** | Parent Product Id. | [optional] [readonly] 
**product_type** | **str** | The type of product. | [optional] [readonly] 
**product_type_id** | **str** | The product type id. | [optional] [readonly] 
**purchase_date** | **datetime** | The date of purchase. | [optional] [readonly] 
**quantity** | **float** | The purchased product quantity. | [optional] [readonly] 
**reseller** | [**Reseller**](Reseller.md) |  | [optional] 
**sku_description** | **str** | Sku description. | [optional] [readonly] 
**sku_id** | **str** | Sku Id. | [optional] [readonly] 
**status** | **str** | Product status. | [optional] 

## Example

```python
from openapi_client.models.product_properties import ProductProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductProperties from a JSON string
product_properties_instance = ProductProperties.from_json(json)
# print the JSON string representation of the object
print(ProductProperties.to_json())

# convert the object into a dict
product_properties_dict = product_properties_instance.to_dict()
# create an instance of ProductProperties from a dict
product_properties_from_dict = ProductProperties.from_dict(product_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


