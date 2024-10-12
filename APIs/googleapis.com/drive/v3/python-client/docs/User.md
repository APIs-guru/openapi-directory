# User

Information about a Drive user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. A plain text displayable name for this user. | [optional] 
**email_address** | **str** | Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#user\&quot;&#x60;. | [optional] [default to 'drive#user']
**me** | **bool** | Output only. Whether this user is the requesting user. | [optional] 
**permission_id** | **str** | Output only. The user&#39;s ID as visible in Permission resources. | [optional] 
**photo_link** | **str** | Output only. A link to the user&#39;s profile photo, if available. | [optional] 

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


