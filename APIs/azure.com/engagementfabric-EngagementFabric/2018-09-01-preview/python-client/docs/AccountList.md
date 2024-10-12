# AccountList

The list of the EngagementFabric accounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Account]**](Account.md) | EngagementFabric accounts | [optional] 

## Example

```python
from openapi_client.models.account_list import AccountList

# TODO update the JSON string below
json = "{}"
# create an instance of AccountList from a JSON string
account_list_instance = AccountList.from_json(json)
# print the JSON string representation of the object
print(AccountList.to_json())

# convert the object into a dict
account_list_dict = account_list_instance.to_dict()
# create an instance of AccountList from a dict
account_list_from_dict = AccountList.from_dict(account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


