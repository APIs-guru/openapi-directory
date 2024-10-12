# AccountStatusAccountLevelIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country for which this issue is reported. | [optional] 
**destination** | **str** | The destination the issue applies to. If this field is empty then the issue applies to all available destinations. | [optional] 
**detail** | **str** | Additional details about the issue. | [optional] 
**documentation** | **str** | The URL of a web page to help resolving this issue. | [optional] 
**id** | **str** | Issue identifier. | [optional] 
**severity** | **str** | Severity of the issue. Acceptable values are: - \&quot;&#x60;critical&#x60;\&quot; - \&quot;&#x60;error&#x60;\&quot; - \&quot;&#x60;suggestion&#x60;\&quot;  | [optional] 
**title** | **str** | Short description of the issue. | [optional] 

## Example

```python
from openapi_client.models.account_status_account_level_issue import AccountStatusAccountLevelIssue

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusAccountLevelIssue from a JSON string
account_status_account_level_issue_instance = AccountStatusAccountLevelIssue.from_json(json)
# print the JSON string representation of the object
print(AccountStatusAccountLevelIssue.to_json())

# convert the object into a dict
account_status_account_level_issue_dict = account_status_account_level_issue_instance.to_dict()
# create an instance of AccountStatusAccountLevelIssue from a dict
account_status_account_level_issue_from_dict = AccountStatusAccountLevelIssue.from_dict(account_status_account_level_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


