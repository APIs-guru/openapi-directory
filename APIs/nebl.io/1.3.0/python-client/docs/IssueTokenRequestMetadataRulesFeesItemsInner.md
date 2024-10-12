# IssueTokenRequestMetadataRulesFeesItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address fee is auto sent to | [optional] 
**token_id** | **str** | How fee should be paid, either with a tokenId, or with NEBL if null | [optional] 
**value** | **str** | Amount of NTP1 token, or NEBL (in satoshi) to pay as fee | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_rules_fees_items_inner import IssueTokenRequestMetadataRulesFeesItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataRulesFeesItemsInner from a JSON string
issue_token_request_metadata_rules_fees_items_inner_instance = IssueTokenRequestMetadataRulesFeesItemsInner.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataRulesFeesItemsInner.to_json())

# convert the object into a dict
issue_token_request_metadata_rules_fees_items_inner_dict = issue_token_request_metadata_rules_fees_items_inner_instance.to_dict()
# create an instance of IssueTokenRequestMetadataRulesFeesItemsInner from a dict
issue_token_request_metadata_rules_fees_items_inner_from_dict = IssueTokenRequestMetadataRulesFeesItemsInner.from_dict(issue_token_request_metadata_rules_fees_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


