# ActionGroupList

A list of action groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Provides the link to retrieve the next set of elements. | [optional] 
**value** | [**List[ActionGroupResource]**](ActionGroupResource.md) | The list of action groups. | [optional] 

## Example

```python
from openapi_client.models.action_group_list import ActionGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroupList from a JSON string
action_group_list_instance = ActionGroupList.from_json(json)
# print the JSON string representation of the object
print(ActionGroupList.to_json())

# convert the object into a dict
action_group_list_dict = action_group_list_instance.to_dict()
# create an instance of ActionGroupList from a dict
action_group_list_from_dict = ActionGroupList.from_dict(action_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


