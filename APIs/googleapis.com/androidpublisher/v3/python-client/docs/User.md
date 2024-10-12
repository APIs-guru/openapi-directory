# User

A user resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_state** | **str** | Output only. The state of the user&#39;s access to the Play Console. | [optional] [readonly] 
**developer_account_permissions** | **List[str]** | Permissions for the user which apply across the developer account. | [optional] 
**email** | **str** | Immutable. The user&#39;s email address. | [optional] 
**expiration_time** | **str** | The time at which the user&#39;s access expires, if set. When setting this value, it must always be in the future. | [optional] 
**grants** | [**List[Grant]**](Grant.md) | Output only. Per-app permissions for the user. | [optional] [readonly] 
**name** | **str** | Required. Resource name for this user, following the pattern \&quot;developers/{developer}/users/{email}\&quot;. | [optional] 
**partial** | **bool** | Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also &#x60;true&#x60; if this user is the account owner. If this field is &#x60;true&#x60;, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn&#39;t know about them or because the user is the account owner. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


