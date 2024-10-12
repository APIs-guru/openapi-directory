# InvoiceSummaryAdditionalChargeSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_amount** | [**Amount**](Amount.md) |  | [optional] 
**type** | **str** | [required] Type of the additional charge. Acceptable values are: - \&quot;&#x60;shipping&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.invoice_summary_additional_charge_summary import InvoiceSummaryAdditionalChargeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSummaryAdditionalChargeSummary from a JSON string
invoice_summary_additional_charge_summary_instance = InvoiceSummaryAdditionalChargeSummary.from_json(json)
# print the JSON string representation of the object
print(InvoiceSummaryAdditionalChargeSummary.to_json())

# convert the object into a dict
invoice_summary_additional_charge_summary_dict = invoice_summary_additional_charge_summary_instance.to_dict()
# create an instance of InvoiceSummaryAdditionalChargeSummary from a dict
invoice_summary_additional_charge_summary_from_dict = InvoiceSummaryAdditionalChargeSummary.from_dict(invoice_summary_additional_charge_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


