# UserAttributes

Attributes of the user including expiration, home directory, and permissions. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_timestamp** | **str** | Timestamp of most recent successful user login. | [optional] 
**account_name** | **str** | Name of the account this user belongs to. | 
**created** | **datetime** | Timestamp of user creation. | 
**email** | **str** | Email address of the user. | [optional] 
**expiration** | **str** | Timestamp of user expiration. | [optional] 
**first_login** | **bool** | &#x60;true&#x60; if the user has logged into the system. | [optional] 
**home_path** | **str** | Path to the user&#39;s home folder. | [optional] 
**locked** | **bool** | &#x60;true&#x60; if the user is locked and cannot log in. | [optional] 
**modified** | **datetime** | Timestamp of user modification. | 
**nickname** | **str** | Nickname of the user. | 
**onboarding** | **bool** | Whether the onboarding help system is enabled for this user. &#x60;true&#x60; means that additional help popups are displayed in the web application for this user. | 
**permissions** | [**UserPermissions**](UserPermissions.md) |  | 
**role** | **str** | User&#39;s access level | 
**status** | **int** | Indicates user activity status. &#x60;0&#x60; means the user is locked and cannot log in. &#x60;1&#x60; means the user is active and can log in. | 
**time_zone** | **str** | User&#39;s timezone. See &lt;a href&#x3D;&#39;https://php.net/manual/en/timezones.php&#39; target&#x3D;&#39;blank&#39;&gt;this page&lt;/a&gt; for allowed values. | 
**username** | **str** | Username of the user. | 

## Example

```python
from openapi_client.models.user_attributes import UserAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UserAttributes from a JSON string
user_attributes_instance = UserAttributes.from_json(json)
# print the JSON string representation of the object
print(UserAttributes.to_json())

# convert the object into a dict
user_attributes_dict = user_attributes_instance.to_dict()
# create an instance of UserAttributes from a dict
user_attributes_from_dict = UserAttributes.from_dict(user_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


