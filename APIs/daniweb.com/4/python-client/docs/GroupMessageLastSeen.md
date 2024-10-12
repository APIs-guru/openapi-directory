# GroupMessageLastSeen


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_message_last_seen import GroupMessageLastSeen

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMessageLastSeen from a JSON string
group_message_last_seen_instance = GroupMessageLastSeen.from_json(json)
# print the JSON string representation of the object
print(GroupMessageLastSeen.to_json())

# convert the object into a dict
group_message_last_seen_dict = group_message_last_seen_instance.to_dict()
# create an instance of GroupMessageLastSeen from a dict
group_message_last_seen_from_dict = GroupMessageLastSeen.from_dict(group_message_last_seen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


