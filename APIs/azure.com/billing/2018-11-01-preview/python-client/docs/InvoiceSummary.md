# InvoiceSummary

An invoice resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InvoiceSummaryProperties**](InvoiceSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_summary import InvoiceSummary

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSummary from a JSON string
invoice_summary_instance = InvoiceSummary.from_json(json)
# print the JSON string representation of the object
print(InvoiceSummary.to_json())

# convert the object into a dict
invoice_summary_dict = invoice_summary_instance.to_dict()
# create an instance of InvoiceSummary from a dict
invoice_summary_from_dict = InvoiceSummary.from_dict(invoice_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


