# UserAccountPatch

The UserAccount resource contains basic information regarding the authenticated user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits_overage_percent_trip_switch** | **int** | If the credits consumed in the billing period are this percentage above the account plan&#39;s included credits, cease further consumption of credits until the end of the billing period. Any integer between 1 and 1,000. Optional. Leave blank for no limit. | [optional] 

## Example

```python
from openapi_client.models.user_account_patch import UserAccountPatch

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccountPatch from a JSON string
user_account_patch_instance = UserAccountPatch.from_json(json)
# print the JSON string representation of the object
print(UserAccountPatch.to_json())

# convert the object into a dict
user_account_patch_dict = user_account_patch_instance.to_dict()
# create an instance of UserAccountPatch from a dict
user_account_patch_from_dict = UserAccountPatch.from_dict(user_account_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


