# VSTSAccountUser

VSTS user profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Profile display name | [optional] 
**email_address** | **str** | Profile email | [optional] 
**id** | **str** | Profile id | [optional] 
**public_alias** | **str** | Profile alias | [optional] 

## Example

```python
from openapi_client.models.vsts_account_user import VSTSAccountUser

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSAccountUser from a JSON string
vsts_account_user_instance = VSTSAccountUser.from_json(json)
# print the JSON string representation of the object
print(VSTSAccountUser.to_json())

# convert the object into a dict
vsts_account_user_dict = vsts_account_user_instance.to_dict()
# create an instance of VSTSAccountUser from a dict
vsts_account_user_from_dict = VSTSAccountUser.from_dict(vsts_account_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


