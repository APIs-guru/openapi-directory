# DocumentSubmissionEvidenceEvidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | The unique message id used in the OpenPeppol SBDH. | [optional] 
**receiving_accesspoint** | **str** | An identification of the OpenPeppol accesspoint that the invoice was sent to. | [optional] 
**remote_mta_ip** | **str** | The IP address of the sending SMTP server. | [optional] 
**reporting_mta** | **str** | An identification for the sending SMTP. | [optional] 
**smtp_response** | **str** | The response of the receiving SMTP server. | [optional] 
**timestamp** | **str** | The timestamp of the delivery to the receiving SMTP server. | [optional] 
**transmission_id** | **str** | The unique id for this OpenPeppol transmission. | [optional] 
**xml** | **str** | The XML evidence for the transmission. This is the XML returned by the receiving OpenPeppol accesspoint. | [optional] 

## Example

```python
from openapi_client.models.document_submission_evidence_evidence import DocumentSubmissionEvidenceEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmissionEvidenceEvidence from a JSON string
document_submission_evidence_evidence_instance = DocumentSubmissionEvidenceEvidence.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmissionEvidenceEvidence.to_json())

# convert the object into a dict
document_submission_evidence_evidence_dict = document_submission_evidence_evidence_instance.to_dict()
# create an instance of DocumentSubmissionEvidenceEvidence from a dict
document_submission_evidence_evidence_from_dict = DocumentSubmissionEvidenceEvidence.from_dict(document_submission_evidence_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


