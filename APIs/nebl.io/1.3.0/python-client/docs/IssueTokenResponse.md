# IssueTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **str** | TokenId of the to be issued token | [optional] 
**tx_hex** | **str** | Unsigned, raw transaction hex of the transaction to issue the token | [optional] 

## Example

```python
from openapi_client.models.issue_token_response import IssueTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenResponse from a JSON string
issue_token_response_instance = IssueTokenResponse.from_json(json)
# print the JSON string representation of the object
print(IssueTokenResponse.to_json())

# convert the object into a dict
issue_token_response_dict = issue_token_response_instance.to_dict()
# create an instance of IssueTokenResponse from a dict
issue_token_response_from_dict = IssueTokenResponse.from_dict(issue_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


