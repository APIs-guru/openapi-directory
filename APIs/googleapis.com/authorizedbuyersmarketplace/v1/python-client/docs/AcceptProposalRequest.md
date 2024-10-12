# AcceptProposalRequest

Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal_revision** | **str** | The last known client revision number of the proposal. | [optional] 

## Example

```python
from openapi_client.models.accept_proposal_request import AcceptProposalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptProposalRequest from a JSON string
accept_proposal_request_instance = AcceptProposalRequest.from_json(json)
# print the JSON string representation of the object
print(AcceptProposalRequest.to_json())

# convert the object into a dict
accept_proposal_request_dict = accept_proposal_request_instance.to_dict()
# create an instance of AcceptProposalRequest from a dict
accept_proposal_request_from_dict = AcceptProposalRequest.from_dict(accept_proposal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


