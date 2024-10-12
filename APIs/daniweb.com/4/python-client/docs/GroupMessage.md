# GroupMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**User**](User.md) |  | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**id** | **float** |  | 
**last_seen** | [**GroupMessageLastSeen**](GroupMessageLastSeen.md) |  | [optional] 
**moderated** | [**GroupMessageModerated**](GroupMessageModerated.md) |  | [optional] 
**text** | [**GroupMessageText**](GroupMessageText.md) |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.group_message import GroupMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMessage from a JSON string
group_message_instance = GroupMessage.from_json(json)
# print the JSON string representation of the object
print(GroupMessage.to_json())

# convert the object into a dict
group_message_dict = group_message_instance.to_dict()
# create an instance of GroupMessage from a dict
group_message_from_dict = GroupMessage.from_dict(group_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


