# AddUserRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address for the user | 
**expiration** | **str** | Optional timestamp when the user should expire, formatted in date-time. | [optional] 
**home_resource** | **str** | Resource identifier for the user&#39;s home folder. See details on [how to specify resources](#section/Identifying-Resources) above.  The user will be locked to this directory and unable to move &#39;up&#39; in the account. If the folder does not exist in the account, it will be created when the user is created.   Users with the &#x60;role&#x60; **admin** should have their homeResource set to &#39;/&#39; | 
**locked** | **bool** | If true, the user will not be able to log in | [optional] 
**nickname** | **str** | An optional nickname (e.g. &#39;David from Sales&#39;). | [optional] 
**onboarding** | **bool** | Set this to **true** to enable extra help popups in the web file manager for this user. | [optional] 
**password** | **str** | Password for the user | 
**permissions** | [**AddUserRequestBodyPermissions**](AddUserRequestBodyPermissions.md) |  | 
**role** | **str** | The type of user to create, either **user** or **admin**. | 
**time_zone** | **str** | Time zone, used for accurate time display within the application. See &lt;a href&#x3D;&#39;https://php.net/manual/en/timezones.php&#39; target&#x3D;&#39;blank&#39;&gt;this page&lt;/a&gt; for allowed values.  | 
**username** | **str** | Username of the user to create. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.  **Note** Usernames must be unique across all ExaVault accounts. | 
**welcome_email** | **bool** | If **true**, send this new user a welcome email upon creation. The content of the welcome email can be configured with the [PATCH /accounts](#operation/updateAccount) method. | [optional] 

## Example

```python
from openapi_client.models.add_user_request_body import AddUserRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserRequestBody from a JSON string
add_user_request_body_instance = AddUserRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddUserRequestBody.to_json())

# convert the object into a dict
add_user_request_body_dict = add_user_request_body_instance.to_dict()
# create an instance of AddUserRequestBody from a dict
add_user_request_body_from_dict = AddUserRequestBody.from_dict(add_user_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


