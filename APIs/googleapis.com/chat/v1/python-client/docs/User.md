# User

A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The user&#39;s display name. | [optional] [readonly] 
**domain_id** | **str** | Unique identifier of the user&#39;s Google Workspace domain. | [optional] 
**is_anonymous** | **bool** | Output only. When &#x60;true&#x60;, the user is deleted or their profile is not visible. | [optional] [readonly] 
**name** | **str** | Resource name for a Google Chat user. Format: &#x60;users/{user}&#x60;. &#x60;users/app&#x60; can be used as an alias for the calling app bot user. For human users, &#x60;{user}&#x60; is the same user identifier as: - the &#x60;id&#x60; for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, &#x60;users/123456789&#x60; in Chat API represents the same person as the &#x60;123456789&#x60; Person profile ID in People API. - the &#x60;id&#x60; for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user&#39;s email address can be used as an alias for &#x60;{user}&#x60; in API requests. For example, if the People API Person profile ID for &#x60;user@example.com&#x60; is &#x60;123456789&#x60;, you can use &#x60;users/user@example.com&#x60; as an alias to reference &#x60;users/123456789&#x60;. Only the canonical resource name (for example &#x60;users/123456789&#x60;) will be returned from the API. | [optional] 
**type** | **str** | User type. | [optional] 

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


