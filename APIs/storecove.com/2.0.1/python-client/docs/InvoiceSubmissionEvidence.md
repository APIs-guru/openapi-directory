# InvoiceSubmissionEvidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[InvoiceSubmissionActionEvidence]**](InvoiceSubmissionActionEvidence.md) | An array of actions taken to deliver the document. | [optional] 
**guid** | **str** | The guid for the InvoiceSubmission. | [optional] 
**status** | **str** | The overall status for this InvoiceSubmission. | [optional] 

## Example

```python
from openapi_client.models.invoice_submission_evidence import InvoiceSubmissionEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSubmissionEvidence from a JSON string
invoice_submission_evidence_instance = InvoiceSubmissionEvidence.from_json(json)
# print the JSON string representation of the object
print(InvoiceSubmissionEvidence.to_json())

# convert the object into a dict
invoice_submission_evidence_dict = invoice_submission_evidence_instance.to_dict()
# create an instance of InvoiceSubmissionEvidence from a dict
invoice_submission_evidence_from_dict = InvoiceSubmissionEvidence.from_dict(invoice_submission_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


