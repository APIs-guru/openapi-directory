# DocumentSubmissionEvidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentSubmissionEvidenceDocument]**](DocumentSubmissionEvidenceDocument.md) | An array of documents that were sent. For OpenPeppol, this is always a single document (it may contain a PDF inside). For Email, the number of documents depends on the number of attachments, which in turn depends on the country of the receiver. For email, the raw email in RFC822 format is also included. | [optional] 
**evidence** | [**DocumentSubmissionEvidenceEvidence**](DocumentSubmissionEvidenceEvidence.md) |  | [optional] 
**network** | **str** | The exchange network that was used to send the document | [optional] 
**receiver** | **str** | The legal identifier of the receiver, or the tax identifier if there is no legal identifier. | [optional] 
**sender** | **str** | The legal identifier of the sender, or the tax identifier if there is no legal identifier. | [optional] 

## Example

```python
from openapi_client.models.document_submission_evidence import DocumentSubmissionEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmissionEvidence from a JSON string
document_submission_evidence_instance = DocumentSubmissionEvidence.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmissionEvidence.to_json())

# convert the object into a dict
document_submission_evidence_dict = document_submission_evidence_instance.to_dict()
# create an instance of DocumentSubmissionEvidence from a dict
document_submission_evidence_from_dict = DocumentSubmissionEvidence.from_dict(document_submission_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


