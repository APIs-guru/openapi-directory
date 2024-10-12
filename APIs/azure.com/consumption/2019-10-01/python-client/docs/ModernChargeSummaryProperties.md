# ModernChargeSummaryProperties

The properties of modern charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_charges** | [**Amount**](Amount.md) |  | [optional] 
**billing_account_id** | **str** | Billing Account Id | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the charge belongs to. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing Profile Id | [optional] [readonly] 
**charges_billed_separately** | [**Amount**](Amount.md) |  | [optional] 
**customer_id** | **str** | Customer Id | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice Section Id | [optional] [readonly] 
**is_invoiced** | **bool** | Is charge Invoiced | [optional] [readonly] 
**marketplace_charges** | [**Amount**](Amount.md) |  | [optional] 
**usage_end** | **str** | Usage end date. | [optional] [readonly] 
**usage_start** | **str** | Usage start date. | [optional] [readonly] 

## Example

```python
from openapi_client.models.modern_charge_summary_properties import ModernChargeSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModernChargeSummaryProperties from a JSON string
modern_charge_summary_properties_instance = ModernChargeSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(ModernChargeSummaryProperties.to_json())

# convert the object into a dict
modern_charge_summary_properties_dict = modern_charge_summary_properties_instance.to_dict()
# create an instance of ModernChargeSummaryProperties from a dict
modern_charge_summary_properties_from_dict = ModernChargeSummaryProperties.from_dict(modern_charge_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


