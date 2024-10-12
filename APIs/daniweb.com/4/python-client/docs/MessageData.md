# MessageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**App**](App.md) |  | [optional] 
**content** | [**GroupMessageDataContent**](GroupMessageDataContent.md) |  | [optional] 
**id** | **float** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**settings** | [**GroupMessageDataSettings**](GroupMessageDataSettings.md) |  | [optional] 
**status** | [**GroupMessageDataStatus**](GroupMessageDataStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_data import MessageData

# TODO update the JSON string below
json = "{}"
# create an instance of MessageData from a JSON string
message_data_instance = MessageData.from_json(json)
# print the JSON string representation of the object
print(MessageData.to_json())

# convert the object into a dict
message_data_dict = message_data_instance.to_dict()
# create an instance of MessageData from a dict
message_data_from_dict = MessageData.from_dict(message_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


