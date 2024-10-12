# ChargeSummaryProperties

The properties of the charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_charges** | [**Amount**](Amount.md) |  | [optional] 
**billing_account_id** | **str** | The id of the billing account resource that the charge belongs to. | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the usage belongs to. | [optional] [readonly] 
**billing_profile_id** | **str** | The id of the billing profile resource that the charge belongs to. | [optional] [readonly] 
**charges_billed_separately** | [**Amount**](Amount.md) |  | [optional] 
**invoice_section_id** | **str** | The id of the invoice section resource that the charge belongs to. | [optional] [readonly] 
**marketplace_charges** | [**Amount**](Amount.md) |  | [optional] 
**usage_end** | **str** | Billing period end date. | [optional] [readonly] 
**usage_start** | **str** | Billing period start date. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charge_summary_properties import ChargeSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSummaryProperties from a JSON string
charge_summary_properties_instance = ChargeSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(ChargeSummaryProperties.to_json())

# convert the object into a dict
charge_summary_properties_dict = charge_summary_properties_instance.to_dict()
# create an instance of ChargeSummaryProperties from a dict
charge_summary_properties_from_dict = ChargeSummaryProperties.from_dict(charge_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


