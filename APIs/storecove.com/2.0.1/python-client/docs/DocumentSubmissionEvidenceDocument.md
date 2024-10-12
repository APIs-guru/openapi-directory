# DocumentSubmissionEvidenceDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The URL where the document can be retrieved. | [optional] 
**expires_at** | **str** | The datetime the URL expires. Format: &#39;YYYY-MM-DD HH:mm:ss.&#39; | [optional] 
**mime_type** | **str** | The mime type of the document. | [optional] 

## Example

```python
from openapi_client.models.document_submission_evidence_document import DocumentSubmissionEvidenceDocument

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmissionEvidenceDocument from a JSON string
document_submission_evidence_document_instance = DocumentSubmissionEvidenceDocument.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmissionEvidenceDocument.to_json())

# convert the object into a dict
document_submission_evidence_document_dict = document_submission_evidence_document_instance.to_dict()
# create an instance of DocumentSubmissionEvidenceDocument from a dict
document_submission_evidence_document_from_dict = DocumentSubmissionEvidenceDocument.from_dict(document_submission_evidence_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


