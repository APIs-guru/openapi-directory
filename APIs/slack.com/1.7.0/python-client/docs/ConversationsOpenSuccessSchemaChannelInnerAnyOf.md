# ConversationsOpenSuccessSchemaChannelInnerAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** |  | [optional] 
**id** | **str** |  | 
**is_im** | **bool** |  | [optional] 
**is_open** | **bool** |  | [optional] 
**last_read** | **str** |  | [optional] 
**latest** | [**ObjsMessage**](ObjsMessage.md) |  | [optional] 
**unread_count** | **float** |  | [optional] 
**unread_count_display** | **float** |  | [optional] 
**user** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.conversations_open_success_schema_channel_inner_any_of import ConversationsOpenSuccessSchemaChannelInnerAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsOpenSuccessSchemaChannelInnerAnyOf from a JSON string
conversations_open_success_schema_channel_inner_any_of_instance = ConversationsOpenSuccessSchemaChannelInnerAnyOf.from_json(json)
# print the JSON string representation of the object
print(ConversationsOpenSuccessSchemaChannelInnerAnyOf.to_json())

# convert the object into a dict
conversations_open_success_schema_channel_inner_any_of_dict = conversations_open_success_schema_channel_inner_any_of_instance.to_dict()
# create an instance of ConversationsOpenSuccessSchemaChannelInnerAnyOf from a dict
conversations_open_success_schema_channel_inner_any_of_from_dict = ConversationsOpenSuccessSchemaChannelInnerAnyOf.from_dict(conversations_open_success_schema_channel_inner_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


