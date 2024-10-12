# User

A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:   *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests. | [optional] 
**account_type** | **str** | The user account type. Can take the following values:   *  &#x60;atlassian&#x60; regular Atlassian user account  *  &#x60;app&#x60; system account used for Connect applications and OAuth to represent external systems  *  &#x60;customer&#x60; Jira Service Desk account representing an external service desk | [optional] [readonly] 
**active** | **bool** | Whether the user is active. | [optional] [readonly] 
**application_roles** | [**SimpleListWrapperApplicationRole**](SimpleListWrapperApplicationRole.md) | The application roles the user is assigned to. | [optional] [readonly] 
**avatar_urls** | [**AvatarUrlsBean**](AvatarUrlsBean.md) | The avatars of the user. | [optional] [readonly] 
**display_name** | **str** | The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. | [optional] [readonly] 
**email_address** | **str** | The email address of the user. Depending on the user’s privacy setting, this may be returned as null. | [optional] [readonly] 
**expand** | **str** | Expand options that include additional user details in the response. | [optional] [readonly] 
**groups** | [**SimpleListWrapperGroupName**](SimpleListWrapperGroupName.md) | The groups that the user belongs to. | [optional] [readonly] 
**key** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**locale** | **str** | The locale of the user. Depending on the user’s privacy setting, this may be returned as null. | [optional] [readonly] 
**name** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**var_self** | **str** | The URL of the user. | [optional] [readonly] 
**time_zone** | **str** | The time zone specified in the user&#39;s profile. Depending on the user’s privacy setting, this may be returned as null. | [optional] [readonly] 

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


