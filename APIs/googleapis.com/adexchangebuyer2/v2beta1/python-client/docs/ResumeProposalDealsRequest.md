# ResumeProposalDealsRequest

Request message to resume (unpause) serving for already-finalized deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_deal_ids** | **List[str]** | The external_deal_id&#39;s of the deals to resume. If empty, all the deals in the proposal will be resumed. | [optional] 

## Example

```python
from openapi_client.models.resume_proposal_deals_request import ResumeProposalDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeProposalDealsRequest from a JSON string
resume_proposal_deals_request_instance = ResumeProposalDealsRequest.from_json(json)
# print the JSON string representation of the object
print(ResumeProposalDealsRequest.to_json())

# convert the object into a dict
resume_proposal_deals_request_dict = resume_proposal_deals_request_instance.to_dict()
# create an instance of ResumeProposalDealsRequest from a dict
resume_proposal_deals_request_from_dict = ResumeProposalDealsRequest.from_dict(resume_proposal_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


