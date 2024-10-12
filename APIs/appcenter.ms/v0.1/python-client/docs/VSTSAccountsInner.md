# VSTSAccountsInner

VSTS account with projects list and user info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account id | [optional] 
**account_name** | **str** | Account name | [optional] 
**account_status** | **str** | Account status | [optional] 
**account_type** | **str** | Account type | [optional] 
**account_uri** | **str** | Account uri | [optional] 
**projects** | [**List[VSTSAccountProjectsInner]**](VSTSAccountProjectsInner.md) | Account projects | [optional] 
**user** | [**VSTSAccountUser**](VSTSAccountUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.vsts_accounts_inner import VSTSAccountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSAccountsInner from a JSON string
vsts_accounts_inner_instance = VSTSAccountsInner.from_json(json)
# print the JSON string representation of the object
print(VSTSAccountsInner.to_json())

# convert the object into a dict
vsts_accounts_inner_dict = vsts_accounts_inner_instance.to_dict()
# create an instance of VSTSAccountsInner from a dict
vsts_accounts_inner_from_dict = VSTSAccountsInner.from_dict(vsts_accounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


