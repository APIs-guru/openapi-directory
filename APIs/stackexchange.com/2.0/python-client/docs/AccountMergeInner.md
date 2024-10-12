# AccountMergeInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_date** | **int** |  | [optional] 
**new_account_id** | **int** |  | [optional] 
**old_account_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.account_merge_inner import AccountMergeInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountMergeInner from a JSON string
account_merge_inner_instance = AccountMergeInner.from_json(json)
# print the JSON string representation of the object
print(AccountMergeInner.to_json())

# convert the object into a dict
account_merge_inner_dict = account_merge_inner_instance.to_dict()
# create an instance of AccountMergeInner from a dict
account_merge_inner_from_dict = AccountMergeInner.from_dict(account_merge_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


