# InvoiceSubmissionActionEvidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiver_response** | **str** | The response the receiver sent. | [optional] 
**transmission_datetime** | **str** | The DateTime of the transmission, as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. | [optional] 
**transmission_result** | **str** | The result of this transmission. | [optional] 
**transmission_type** | **str** | How the document was transmitted. | [optional] 
**transmitted_document** | **str** | The document that was transmitted. | [optional] 

## Example

```python
from openapi_client.models.invoice_submission_action_evidence import InvoiceSubmissionActionEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSubmissionActionEvidence from a JSON string
invoice_submission_action_evidence_instance = InvoiceSubmissionActionEvidence.from_json(json)
# print the JSON string representation of the object
print(InvoiceSubmissionActionEvidence.to_json())

# convert the object into a dict
invoice_submission_action_evidence_dict = invoice_submission_action_evidence_instance.to_dict()
# create an instance of InvoiceSubmissionActionEvidence from a dict
invoice_submission_action_evidence_from_dict = InvoiceSubmissionActionEvidence.from_dict(invoice_submission_action_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


