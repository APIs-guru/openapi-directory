# MailCountResult

Gmail and classic Hangouts-specific count metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_count_errors** | [**List[AccountCountError]**](AccountCountError.md) | Errors occurred when querying these accounts. | [optional] 
**account_counts** | [**List[AccountCount]**](AccountCount.md) | Subtotal count per matching account that have more than zero messages. | [optional] 
**matching_accounts_count** | **str** | Total number of accounts that can be queried and have more than zero messages. | [optional] 
**non_queryable_accounts** | **List[str]** | When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set. | [optional] 
**queried_accounts_count** | **str** | Total number of accounts involved in this count operation. | [optional] 

## Example

```python
from openapi_client.models.mail_count_result import MailCountResult

# TODO update the JSON string below
json = "{}"
# create an instance of MailCountResult from a JSON string
mail_count_result_instance = MailCountResult.from_json(json)
# print the JSON string representation of the object
print(MailCountResult.to_json())

# convert the object into a dict
mail_count_result_dict = mail_count_result_instance.to_dict()
# create an instance of MailCountResult from a dict
mail_count_result_from_dict = MailCountResult.from_dict(mail_count_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


