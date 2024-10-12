# SetUpSpaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[Membership]**](Membership.md) | Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The &#x60;Membership.member&#x60; field must contain a &#x60;user&#x60; with &#x60;name&#x60; populated (format: &#x60;users/{user}&#x60;) and &#x60;type&#x60; set to &#x60;User.Type.HUMAN&#x60;. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user&#39;s email as an alias for {user}. For example, the &#x60;user.name&#x60; can be &#x60;users/example@gmail.com&#x60;.\&quot; To invite Gmail users or users from external Google Workspace domains, user&#39;s email must be used for &#x60;{user}&#x60;. Optional when setting &#x60;Space.spaceType&#x60; to &#x60;SPACE&#x60;. Required when setting &#x60;Space.spaceType&#x60; to &#x60;GROUP_CHAT&#x60;, along with at least two memberships. Required when setting &#x60;Space.spaceType&#x60; to &#x60;DIRECT_MESSAGE&#x60; with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting &#x60;Space.spaceType&#x60; to &#x60;DIRECT_MESSAGE&#x60; and &#x60;Space.singleUserBotDm&#x60; to &#x60;true&#x60;). | [optional] 
**request_id** | **str** | Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. | [optional] 
**space** | [**Space**](Space.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_up_space_request import SetUpSpaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetUpSpaceRequest from a JSON string
set_up_space_request_instance = SetUpSpaceRequest.from_json(json)
# print the JSON string representation of the object
print(SetUpSpaceRequest.to_json())

# convert the object into a dict
set_up_space_request_dict = set_up_space_request_instance.to_dict()
# create an instance of SetUpSpaceRequest from a dict
set_up_space_request_from_dict = SetUpSpaceRequest.from_dict(set_up_space_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


