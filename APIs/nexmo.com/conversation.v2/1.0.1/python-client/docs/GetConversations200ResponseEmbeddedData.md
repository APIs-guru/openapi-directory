# GetConversations200ResponseEmbeddedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | [**List[ConversationList]**](ConversationList.md) | List of conversations matching the provided filter | [optional] 

## Example

```python
from openapi_client.models.get_conversations200_response_embedded_data import GetConversations200ResponseEmbeddedData

# TODO update the JSON string below
json = "{}"
# create an instance of GetConversations200ResponseEmbeddedData from a JSON string
get_conversations200_response_embedded_data_instance = GetConversations200ResponseEmbeddedData.from_json(json)
# print the JSON string representation of the object
print(GetConversations200ResponseEmbeddedData.to_json())

# convert the object into a dict
get_conversations200_response_embedded_data_dict = get_conversations200_response_embedded_data_instance.to_dict()
# create an instance of GetConversations200ResponseEmbeddedData from a dict
get_conversations200_response_embedded_data_from_dict = GetConversations200ResponseEmbeddedData.from_dict(get_conversations200_response_embedded_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


