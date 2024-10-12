# IssueTokenRequestMetadataRulesExpiration

Object describing expiration rules of the token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** | Whether this rule can be modified in future transactions | [optional] 
**valid_until** | **float** | Blockheight at wh | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_rules_expiration import IssueTokenRequestMetadataRulesExpiration

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataRulesExpiration from a JSON string
issue_token_request_metadata_rules_expiration_instance = IssueTokenRequestMetadataRulesExpiration.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataRulesExpiration.to_json())

# convert the object into a dict
issue_token_request_metadata_rules_expiration_dict = issue_token_request_metadata_rules_expiration_instance.to_dict()
# create an instance of IssueTokenRequestMetadataRulesExpiration from a dict
issue_token_request_metadata_rules_expiration_from_dict = IssueTokenRequestMetadataRulesExpiration.from_dict(issue_token_request_metadata_rules_expiration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


