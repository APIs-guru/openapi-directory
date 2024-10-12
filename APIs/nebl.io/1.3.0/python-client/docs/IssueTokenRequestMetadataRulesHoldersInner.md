# IssueTokenRequestMetadataRulesHoldersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address that can hold the token | [optional] 
**locked** | **bool** | Whether this rule can be modified in future transactions | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_rules_holders_inner import IssueTokenRequestMetadataRulesHoldersInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataRulesHoldersInner from a JSON string
issue_token_request_metadata_rules_holders_inner_instance = IssueTokenRequestMetadataRulesHoldersInner.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataRulesHoldersInner.to_json())

# convert the object into a dict
issue_token_request_metadata_rules_holders_inner_dict = issue_token_request_metadata_rules_holders_inner_instance.to_dict()
# create an instance of IssueTokenRequestMetadataRulesHoldersInner from a dict
issue_token_request_metadata_rules_holders_inner_from_dict = IssueTokenRequestMetadataRulesHoldersInner.from_dict(issue_token_request_metadata_rules_holders_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


