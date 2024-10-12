# GroupsCountResult

Groups specific count metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_count_errors** | [**List[AccountCountError]**](AccountCountError.md) | Error occurred when querying these accounts. | [optional] 
**account_counts** | [**List[AccountCount]**](AccountCount.md) | Subtotal count per matching account that have more than zero messages. | [optional] 
**matching_accounts_count** | **str** | Total number of accounts that can be queried and have more than zero messages. | [optional] 
**non_queryable_accounts** | **List[str]** | When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set. | [optional] 
**queried_accounts_count** | **str** | Total number of accounts involved in this count operation. | [optional] 

## Example

```python
from openapi_client.models.groups_count_result import GroupsCountResult

# TODO update the JSON string below
json = "{}"
# create an instance of GroupsCountResult from a JSON string
groups_count_result_instance = GroupsCountResult.from_json(json)
# print the JSON string representation of the object
print(GroupsCountResult.to_json())

# convert the object into a dict
groups_count_result_dict = groups_count_result_instance.to_dict()
# create an instance of GroupsCountResult from a dict
groups_count_result_from_dict = GroupsCountResult.from_dict(groups_count_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


