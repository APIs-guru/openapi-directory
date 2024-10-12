# VSTSAccount

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
from openapi_client.models.vsts_account import VSTSAccount

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSAccount from a JSON string
vsts_account_instance = VSTSAccount.from_json(json)
# print the JSON string representation of the object
print(VSTSAccount.to_json())

# convert the object into a dict
vsts_account_dict = vsts_account_instance.to_dict()
# create an instance of VSTSAccount from a dict
vsts_account_from_dict = VSTSAccount.from_dict(vsts_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


