# PauseProposalDealsRequest

Request message to pause serving for finalized deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_deal_ids** | **List[str]** | The external_deal_id&#39;s of the deals to be paused. If empty, all the deals in the proposal will be paused. | [optional] 
**reason** | **str** | The reason why the deals are being paused. This human readable message will be displayed in the seller&#39;s UI. (Max length: 1000 unicode code units.) | [optional] 

## Example

```python
from openapi_client.models.pause_proposal_deals_request import PauseProposalDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PauseProposalDealsRequest from a JSON string
pause_proposal_deals_request_instance = PauseProposalDealsRequest.from_json(json)
# print the JSON string representation of the object
print(PauseProposalDealsRequest.to_json())

# convert the object into a dict
pause_proposal_deals_request_dict = pause_proposal_deals_request_instance.to_dict()
# create an instance of PauseProposalDealsRequest from a dict
pause_proposal_deals_request_from_dict = PauseProposalDealsRequest.from_dict(pause_proposal_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


