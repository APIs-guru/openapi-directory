# BillingPropertySummary

The billing property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** | Billing account Id. | [optional] [readonly] 
**billing_account_name** | **str** | Billing account name. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing profile Id. | [optional] [readonly] 
**billing_profile_name** | **str** | Billing profile name. | [optional] [readonly] 
**billing_tenant_id** | **str** | Billing tenant Id. | [optional] [readonly] 
**cost_center** | **str** | Cost center name. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice Section Id. | [optional] [readonly] 
**invoice_section_name** | **str** | Invoice Section name. | [optional] [readonly] 
**product_id** | **str** | Product Id. | [optional] [readonly] 
**product_name** | **str** | Product name. | [optional] [readonly] 
**sku_description** | **str** | SKU description. | [optional] [readonly] 
**sku_id** | **str** | SKU Id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_property_summary import BillingPropertySummary

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPropertySummary from a JSON string
billing_property_summary_instance = BillingPropertySummary.from_json(json)
# print the JSON string representation of the object
print(BillingPropertySummary.to_json())

# convert the object into a dict
billing_property_summary_dict = billing_property_summary_instance.to_dict()
# create an instance of BillingPropertySummary from a dict
billing_property_summary_from_dict = BillingPropertySummary.from_dict(billing_property_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


