# AccountStatusItemLevelIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The attribute&#39;s name, if the issue is caused by a single attribute. | [optional] 
**code** | **str** | The error code of the issue. | [optional] 
**description** | **str** | A short issue description in English. | [optional] 
**detail** | **str** | A detailed issue description in English. | [optional] 
**documentation** | **str** | The URL of a web page to help with resolving this issue. | [optional] 
**num_items** | **str** | Number of items with this issue. | [optional] 
**resolution** | **str** | Whether the issue can be resolved by the merchant. | [optional] 
**servability** | **str** | How this issue affects serving of the offer. | [optional] 

## Example

```python
from openapi_client.models.account_status_item_level_issue import AccountStatusItemLevelIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusItemLevelIssue from a JSON string
account_status_item_level_issue_instance = AccountStatusItemLevelIssue.from_json(json)
# print the JSON string representation of the object
print(AccountStatusItemLevelIssue.to_json())

# convert the object into a dict
account_status_item_level_issue_dict = account_status_item_level_issue_instance.to_dict()
# create an instance of AccountStatusItemLevelIssue from a dict
account_status_item_level_issue_from_dict = AccountStatusItemLevelIssue.from_dict(account_status_item_level_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


