# UserAction

Represents an action taken by the user that triggered a notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **str** | An optional payload for the action.  For actions of type CUSTOM, this is the ID of the custom menu item that was selected. | [optional] 
**type** | **str** | The type of action. The value of this can be:   - SHARE - the user shared an item.  - REPLY - the user replied to an item.  - REPLY_ALL - the user replied to all recipients of an item.  - CUSTOM - the user selected a custom menu item on the timeline item.  - DELETE - the user deleted the item.  - PIN - the user pinned the item.  - UNPIN - the user unpinned the item.  - LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored. | [optional] 

## Example

```python
from openapi_client.models.user_action import UserAction

# TODO update the JSON string below
json = "{}"
# create an instance of UserAction from a JSON string
user_action_instance = UserAction.from_json(json)
# print the JSON string representation of the object
print(UserAction.to_json())

# convert the object into a dict
user_action_dict = user_action_instance.to_dict()
# create an instance of UserAction from a dict
user_action_from_dict = UserAction.from_dict(user_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


