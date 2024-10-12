# ListProposalsResponse

Response message for listing proposals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**proposals** | [**List[Proposal]**](Proposal.md) | The list of proposals. | [optional] 

## Example

```python
from openapi_client.models.list_proposals_response import ListProposalsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProposalsResponse from a JSON string
list_proposals_response_instance = ListProposalsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProposalsResponse.to_json())

# convert the object into a dict
list_proposals_response_dict = list_proposals_response_instance.to_dict()
# create an instance of ListProposalsResponse from a dict
list_proposals_response_from_dict = ListProposalsResponse.from_dict(list_proposals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


