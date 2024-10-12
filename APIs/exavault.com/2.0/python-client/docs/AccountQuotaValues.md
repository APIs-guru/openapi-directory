# AccountQuotaValues



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notice_enabled** | **bool** | Whether the system should email the account owner if the account storage exceeds the noticeThreshold value. Storage notice emails are sent no mo once per day. | [optional] 
**notice_threshold** | **int** | Percent of account storage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive). | [optional] 
**transactions_notice_enabled** | **bool** | Whether the system should email the account owner if the daily transaction usage exceeds the transactionsNoticeThreshold value. Transaction notice emails are sent no more than once per day. | [optional] 
**transactions_notice_threshold** | **int** | Percent of daily transaction usage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive). | [optional] 

## Example

```python
from openapi_client.models.account_quota_values import AccountQuotaValues

# TODO update the JSON string below
json = "{}"
# create an instance of AccountQuotaValues from a JSON string
account_quota_values_instance = AccountQuotaValues.from_json(json)
# print the JSON string representation of the object
print(AccountQuotaValues.to_json())

# convert the object into a dict
account_quota_values_dict = account_quota_values_instance.to_dict()
# create an instance of AccountQuotaValues from a dict
account_quota_values_from_dict = AccountQuotaValues.from_dict(account_quota_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


