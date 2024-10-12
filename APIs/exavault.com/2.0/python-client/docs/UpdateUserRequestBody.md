# UpdateUserRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address for the user | [optional] 
**expiration** | **str** | Optional timestamp when the user should expire. | [optional] 
**home_resource** | **str** | Resource identifier for the user&#39;s home folder. See details on [how to specify resources](#section/Identifying-Resources) above.  The user will be locked to this directory and unable to move &#39;up&#39; in the account. If the folder does not exist in the account, it will be created when the user logs in.  This setting is ignored for users with the &#x60;role&#x60; **admin**. | [optional] 
**locked** | **bool** | If true, the user will be prevented from logging in | [optional] 
**nickname** | **str** | An optional nickname (e.g. &#39;David from Sales&#39;). | [optional] 
**onboarding** | **bool** | Set this to **true** to enable extra help popups in the web file manager for this user. | [optional] 
**password** | **str** | New password for the user | [optional] 
**permissions** | [**UserPermissions**](UserPermissions.md) |  | [optional] 
**role** | **str** | The type of user (**admin** or **user**). Note that admin users cannot have a &#x60;homeResource&#x60; other than &#39;/&#39;, and will have full permissions, but you must provide at least \&quot;download,upload,list,delete\&quot; in the &#x60;permissions&#x60; parameter. | [optional] 
**time_zone** | **str** | Time zone, used for accurate time display within the application. See &lt;a href&#x3D;&#39;https://php.net/manual/en/timezones.php&#39; target&#x3D;&#39;blank&#39;&gt;this page&lt;/a&gt; for allowed values.  | [optional] 
**username** | **str** | New username for the user. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.  **Note** Usernames must be unique across all ExaVault accounts. | [optional] 

## Example

```python
from openapi_client.models.update_user_request_body import UpdateUserRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserRequestBody from a JSON string
update_user_request_body_instance = UpdateUserRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateUserRequestBody.to_json())

# convert the object into a dict
update_user_request_body_dict = update_user_request_body_instance.to_dict()
# create an instance of UpdateUserRequestBody from a dict
update_user_request_body_from_dict = UpdateUserRequestBody.from_dict(update_user_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


