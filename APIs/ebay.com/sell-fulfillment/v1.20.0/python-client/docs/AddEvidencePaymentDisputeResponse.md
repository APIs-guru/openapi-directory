# AddEvidencePaymentDisputeResponse

This type is used by the response payload of the <strong>addEvidence</strong> method. Its only field is an unique identifier of an evidence set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evidence_id** | **str** | The value returned in this field is the unique identifier of the newly-created evidence set. Upon a successful call, this value is automatically genererated. This new evidence set for the payment dispute includes the evidence file(s) that were passed in to the &lt;strong&gt;fileId&lt;/strong&gt; array in the request payload. The &lt;strong&gt;evidenceId&lt;/strong&gt; value will be needed if the seller wishes to add to the evidence set by using the &lt;strong&gt;updateEvidence&lt;/strong&gt; method, or if they want to retrieve a specific evidence file within the evidence set by using the &lt;strong&gt;fetchEvidenceContent&lt;/strong&gt; method. | [optional] 

## Example

```python
from openapi_client.models.add_evidence_payment_dispute_response import AddEvidencePaymentDisputeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddEvidencePaymentDisputeResponse from a JSON string
add_evidence_payment_dispute_response_instance = AddEvidencePaymentDisputeResponse.from_json(json)
# print the JSON string representation of the object
print(AddEvidencePaymentDisputeResponse.to_json())

# convert the object into a dict
add_evidence_payment_dispute_response_dict = add_evidence_payment_dispute_response_instance.to_dict()
# create an instance of AddEvidencePaymentDisputeResponse from a dict
add_evidence_payment_dispute_response_from_dict = AddEvidencePaymentDisputeResponse.from_dict(add_evidence_payment_dispute_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


