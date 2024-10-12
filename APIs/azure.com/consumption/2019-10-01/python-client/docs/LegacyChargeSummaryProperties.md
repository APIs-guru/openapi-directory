# LegacyChargeSummaryProperties

The properties of legacy charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_charges** | **float** | Azure Charges. | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the charge belongs to. | [optional] [readonly] 
**charges_billed_separately** | **float** | Charges Billed separately. | [optional] [readonly] 
**currency** | **str** | Currency Code | [optional] [readonly] 
**marketplace_charges** | **float** | Marketplace Charges. | [optional] [readonly] 
**usage_end** | **str** | Usage end date. | [optional] [readonly] 
**usage_start** | **str** | Usage start date. | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_charge_summary_properties import LegacyChargeSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyChargeSummaryProperties from a JSON string
legacy_charge_summary_properties_instance = LegacyChargeSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(LegacyChargeSummaryProperties.to_json())

# convert the object into a dict
legacy_charge_summary_properties_dict = legacy_charge_summary_properties_instance.to_dict()
# create an instance of LegacyChargeSummaryProperties from a dict
legacy_charge_summary_properties_from_dict = LegacyChargeSummaryProperties.from_dict(legacy_charge_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


