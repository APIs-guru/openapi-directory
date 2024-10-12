# PauseProposalRequest

Request message to pause serving for an already-finalized proposal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason why the proposal is being paused. This human readable message will be displayed in the seller&#39;s UI. (Max length: 1000 unicode code units.) | [optional] 

## Example

```python
from openapi_client.models.pause_proposal_request import PauseProposalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PauseProposalRequest from a JSON string
pause_proposal_request_instance = PauseProposalRequest.from_json(json)
# print the JSON string representation of the object
print(PauseProposalRequest.to_json())

# convert the object into a dict
pause_proposal_request_dict = pause_proposal_request_instance.to_dict()
# create an instance of PauseProposalRequest from a dict
pause_proposal_request_from_dict = PauseProposalRequest.from_dict(pause_proposal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


