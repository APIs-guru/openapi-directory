# EnterpriseAccount

A service account that can be used to authenticate as the enterprise to API calls that require such authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_email** | **str** | The email address of the service account. | [optional] 

## Example

```python
from openapi_client.models.enterprise_account import EnterpriseAccount

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseAccount from a JSON string
enterprise_account_instance = EnterpriseAccount.from_json(json)
# print the JSON string representation of the object
print(EnterpriseAccount.to_json())

# convert the object into a dict
enterprise_account_dict = enterprise_account_instance.to_dict()
# create an instance of EnterpriseAccount from a dict
enterprise_account_from_dict = EnterpriseAccount.from_dict(enterprise_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


