# FileEvidence

This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | If an &lt;strong&gt;uploadEvidenceFile&lt;/strong&gt; call is successful, a unique identifier of this evidence file will be returned in the &lt;strong&gt;uploadEvidenceFile&lt;/strong&gt; response payload.  This unique &lt;strong&gt;fileId&lt;/strong&gt; value is then used to either add this evidence file to a new evidence set using the &lt;strong&gt;addEvidence&lt;/strong&gt; method, or to add this file to an existing evidence set using the &lt;strong&gt;updateEvidence&lt;/strong&gt; method.&lt;br&gt;&lt;br&gt;Note that if an evidence set already exists for a payment dispute, the &lt;strong&gt;getPaymentDispute&lt;/strong&gt; method will return both the &lt;strong&gt;evidenceId&lt;/strong&gt; (unique identifier of evidence set) value, and the &lt;strong&gt;fileId&lt;/strong&gt; (unique identifier of a file within that evidence set) value(s). | [optional] 

## Example

```python
from openapi_client.models.file_evidence import FileEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of FileEvidence from a JSON string
file_evidence_instance = FileEvidence.from_json(json)
# print the JSON string representation of the object
print(FileEvidence.to_json())

# convert the object into a dict
file_evidence_dict = file_evidence_instance.to_dict()
# create an instance of FileEvidence from a dict
file_evidence_from_dict = FileEvidence.from_dict(file_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


