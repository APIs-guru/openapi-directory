# ActionToPost

Container Class for an action to post

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[ActionToPostItem]**](ActionToPostItem.md) | List with all Actions for this device | [optional] 
**device_id** | **str** | The ID of the Device | [optional] 

## Example

```python
from openapi_client.models.action_to_post import ActionToPost

# TODO update the JSON string below
json = "{}"
# create an instance of ActionToPost from a JSON string
action_to_post_instance = ActionToPost.from_json(json)
# print the JSON string representation of the object
print(ActionToPost.to_json())

# convert the object into a dict
action_to_post_dict = action_to_post_instance.to_dict()
# create an instance of ActionToPost from a dict
action_to_post_from_dict = ActionToPost.from_dict(action_to_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


