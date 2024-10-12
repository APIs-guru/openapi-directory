# UserAccountLevelCodeJsonldGet

The UserAccountLevelCode resource is a set of codes that describes the different levels that can be assigned to user accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_name** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_account_level_code_jsonld_get import UserAccountLevelCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccountLevelCodeJsonldGet from a JSON string
user_account_level_code_jsonld_get_instance = UserAccountLevelCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(UserAccountLevelCodeJsonldGet.to_json())

# convert the object into a dict
user_account_level_code_jsonld_get_dict = user_account_level_code_jsonld_get_instance.to_dict()
# create an instance of UserAccountLevelCodeJsonldGet from a dict
user_account_level_code_jsonld_get_from_dict = UserAccountLevelCodeJsonldGet.from_dict(user_account_level_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


