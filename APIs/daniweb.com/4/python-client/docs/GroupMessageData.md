# GroupMessageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**App**](App.md) |  | [optional] 
**content** | [**GroupMessageDataContent**](GroupMessageDataContent.md) |  | [optional] 
**id** | **float** |  | 
**message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**settings** | [**GroupMessageDataSettings**](GroupMessageDataSettings.md) |  | [optional] 
**status** | [**GroupMessageDataStatus**](GroupMessageDataStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_message_data import GroupMessageData

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMessageData from a JSON string
group_message_data_instance = GroupMessageData.from_json(json)
# print the JSON string representation of the object
print(GroupMessageData.to_json())

# convert the object into a dict
group_message_data_dict = group_message_data_instance.to_dict()
# create an instance of GroupMessageData from a dict
group_message_data_from_dict = GroupMessageData.from_dict(group_message_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


