# IssueTokenRequestMetadataRules

Object describing token rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration** | [**IssueTokenRequestMetadataRulesExpiration**](IssueTokenRequestMetadataRulesExpiration.md) |  | [optional] 
**fees** | [**IssueTokenRequestMetadataRulesFees**](IssueTokenRequestMetadataRulesFees.md) |  | [optional] 
**holders** | [**List[IssueTokenRequestMetadataRulesHoldersInner]**](IssueTokenRequestMetadataRulesHoldersInner.md) | Array of objects describing what addresses can hold the token | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_rules import IssueTokenRequestMetadataRules

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataRules from a JSON string
issue_token_request_metadata_rules_instance = IssueTokenRequestMetadataRules.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataRules.to_json())

# convert the object into a dict
issue_token_request_metadata_rules_dict = issue_token_request_metadata_rules_instance.to_dict()
# create an instance of IssueTokenRequestMetadataRules from a dict
issue_token_request_metadata_rules_from_dict = IssueTokenRequestMetadataRules.from_dict(issue_token_request_metadata_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


