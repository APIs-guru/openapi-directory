# User

Information about a Drive user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. A plain text displayable name for this user. | [optional] 
**email_address** | **str** | Output only. The email address of the user. | [optional] 
**is_authenticated_user** | **bool** | Output only. Whether this user is the same as the authenticated user for whom the request was made. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#user&#x60;. | [optional] [default to 'drive#user']
**permission_id** | **str** | Output only. The user&#39;s ID as visible in the permissions collection. | [optional] 
**picture** | [**UserPicture**](UserPicture.md) |  | [optional] 

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


