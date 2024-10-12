# AccountCountError

An error that occurred when querying a specific account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**UserInfo**](UserInfo.md) |  | [optional] 
**error_type** | **str** | Account query error. | [optional] 

## Example

```python
from openapi_client.models.account_count_error import AccountCountError

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCountError from a JSON string
account_count_error_instance = AccountCountError.from_json(json)
# print the JSON string representation of the object
print(AccountCountError.to_json())

# convert the object into a dict
account_count_error_dict = account_count_error_instance.to_dict()
# create an instance of AccountCountError from a dict
account_count_error_from_dict = AccountCountError.from_dict(account_count_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


