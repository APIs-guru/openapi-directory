# ProductSummaryProperties

The properties of the product summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_id** | **str** | Availability Id. | [optional] [readonly] 
**billing_frequency** | **str** | Billing frequency. | [optional] 
**billing_profile_id** | **str** | Billing Profile id to which this product belongs. | [optional] [readonly] 
**billing_profile_name** | **str** | Billing Profile name to which this product belongs. | [optional] [readonly] 
**display_name** | **str** | The display name of the product. | [optional] [readonly] 
**end_date** | **datetime** | end date. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice section id to which this product belongs. | [optional] [readonly] 
**invoice_section_name** | **str** | Invoice section name to which this product belongs. | [optional] [readonly] 
**last_charge** | [**Amount**](Amount.md) |  | [optional] 
**last_charge_date** | **datetime** | The date of the last charge. | [optional] [readonly] 
**parent_product_id** | **str** | Parent Product Id. | [optional] [readonly] 
**product_type** | **str** | The type of product. | [optional] [readonly] 
**product_type_id** | **str** | The product type id. | [optional] [readonly] 
**purchase_date** | **datetime** | The date of purchase. | [optional] [readonly] 
**quantity** | **float** | The purchased product quantity. | [optional] [readonly] 
**sku_description** | **str** | Sku description. | [optional] [readonly] 
**sku_id** | **str** | Sku Id. | [optional] [readonly] 
**status** | **str** | Product status. | [optional] 

## Example

```python
from openapi_client.models.product_summary_properties import ProductSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSummaryProperties from a JSON string
product_summary_properties_instance = ProductSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(ProductSummaryProperties.to_json())

# convert the object into a dict
product_summary_properties_dict = product_summary_properties_instance.to_dict()
# create an instance of ProductSummaryProperties from a dict
product_summary_properties_from_dict = ProductSummaryProperties.from_dict(product_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


