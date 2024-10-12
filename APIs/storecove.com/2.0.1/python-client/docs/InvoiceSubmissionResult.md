# InvoiceSubmissionResult

The result of an invoice submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **str** | A (V4) GUID for the invoice submission | [optional] 

## Example

```python
from openapi_client.models.invoice_submission_result import InvoiceSubmissionResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSubmissionResult from a JSON string
invoice_submission_result_instance = InvoiceSubmissionResult.from_json(json)
# print the JSON string representation of the object
print(InvoiceSubmissionResult.to_json())

# convert the object into a dict
invoice_submission_result_dict = invoice_submission_result_instance.to_dict()
# create an instance of InvoiceSubmissionResult from a dict
invoice_submission_result_from_dict = InvoiceSubmissionResult.from_dict(invoice_submission_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


