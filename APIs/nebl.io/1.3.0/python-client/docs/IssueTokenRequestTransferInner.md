# IssueTokenRequestTransferInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address to send the amount of issued tokens to | [optional] 
**amount** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_transfer_inner import IssueTokenRequestTransferInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestTransferInner from a JSON string
issue_token_request_transfer_inner_instance = IssueTokenRequestTransferInner.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestTransferInner.to_json())

# convert the object into a dict
issue_token_request_transfer_inner_dict = issue_token_request_transfer_inner_instance.to_dict()
# create an instance of IssueTokenRequestTransferInner from a dict
issue_token_request_transfer_inner_from_dict = IssueTokenRequestTransferInner.from_dict(issue_token_request_transfer_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


