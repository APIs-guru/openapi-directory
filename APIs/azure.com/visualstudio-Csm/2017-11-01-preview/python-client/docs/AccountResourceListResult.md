# AccountResourceListResult

The response to an account resource list GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AccountResource]**](AccountResource.md) | Array of resource details. | [optional] 

## Example

```python
from openapi_client.models.account_resource_list_result import AccountResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountResourceListResult from a JSON string
account_resource_list_result_instance = AccountResourceListResult.from_json(json)
# print the JSON string representation of the object
print(AccountResourceListResult.to_json())

# convert the object into a dict
account_resource_list_result_dict = account_resource_list_result_instance.to_dict()
# create an instance of AccountResourceListResult from a dict
account_resource_list_result_from_dict = AccountResourceListResult.from_dict(account_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


