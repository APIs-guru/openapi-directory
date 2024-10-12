# IssueTokenRequestMetadataRulesFees


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[IssueTokenRequestMetadataRulesFeesItemsInner]**](IssueTokenRequestMetadataRulesFeesItemsInner.md) | Array of objects describing fee rules | [optional] 
**locked** | **bool** | Whether this rule can be modified in future transactions | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_rules_fees import IssueTokenRequestMetadataRulesFees

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataRulesFees from a JSON string
issue_token_request_metadata_rules_fees_instance = IssueTokenRequestMetadataRulesFees.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataRulesFees.to_json())

# convert the object into a dict
issue_token_request_metadata_rules_fees_dict = issue_token_request_metadata_rules_fees_instance.to_dict()
# create an instance of IssueTokenRequestMetadataRulesFees from a dict
issue_token_request_metadata_rules_fees_from_dict = IssueTokenRequestMetadataRulesFees.from_dict(issue_token_request_metadata_rules_fees_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


