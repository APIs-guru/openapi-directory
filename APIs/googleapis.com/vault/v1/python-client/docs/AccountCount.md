# AccountCount

The results count for each account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**UserInfo**](UserInfo.md) |  | [optional] 
**count** | **str** | The number of results (messages or files) found for this account. | [optional] 

## Example

```python
from openapi_client.models.account_count import AccountCount

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCount from a JSON string
account_count_instance = AccountCount.from_json(json)
# print the JSON string representation of the object
print(AccountCount.to_json())

# convert the object into a dict
account_count_dict = account_count_instance.to_dict()
# create an instance of AccountCount from a dict
account_count_from_dict = AccountCount.from_dict(account_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


