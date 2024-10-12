# SubAccountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sub_name** | **str** | The name of the sub account. | [optional] [readonly] 
**id** | **str** | The ID of the sub account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sub_accounts_inner import SubAccountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubAccountsInner from a JSON string
sub_accounts_inner_instance = SubAccountsInner.from_json(json)
# print the JSON string representation of the object
print(SubAccountsInner.to_json())

# convert the object into a dict
sub_accounts_inner_dict = sub_accounts_inner_instance.to_dict()
# create an instance of SubAccountsInner from a dict
sub_accounts_inner_from_dict = SubAccountsInner.from_dict(sub_accounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


