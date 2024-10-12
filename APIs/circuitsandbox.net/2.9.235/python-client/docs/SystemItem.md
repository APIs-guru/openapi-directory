# SystemItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_participants** | **List[str]** | List off affected participants (user ID of the Circuit user) in case the item type PARTICIPANT_ADDED or PARTICIPANT_REMOVED | [optional] 
**new_topic** | **str** | Filled with the new topic of a conversation if the type of the item is CONVERSATION_RENAMED. | [optional] 
**old_topic** | **str** | Filled with the previous topic of a conversation if the type of the item is CONVERSATION_RENAMED. | [optional] 
**type** | **str** | The type of the system item | [optional] 

## Example

```python
from openapi_client.models.system_item import SystemItem

# TODO update the JSON string below
json = "{}"
# create an instance of SystemItem from a JSON string
system_item_instance = SystemItem.from_json(json)
# print the JSON string representation of the object
print(SystemItem.to_json())

# convert the object into a dict
system_item_dict = system_item_instance.to_dict()
# create an instance of SystemItem from a dict
system_item_from_dict = SystemItem.from_dict(system_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


