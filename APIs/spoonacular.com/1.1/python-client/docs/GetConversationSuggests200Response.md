# GetConversationSuggests200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggests** | [**GetConversationSuggests200ResponseSuggests**](GetConversationSuggests200ResponseSuggests.md) |  | 
**words** | **List[object]** |  | 

## Example

```python
from openapi_client.models.get_conversation_suggests200_response import GetConversationSuggests200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetConversationSuggests200Response from a JSON string
get_conversation_suggests200_response_instance = GetConversationSuggests200Response.from_json(json)
# print the JSON string representation of the object
print(GetConversationSuggests200Response.to_json())

# convert the object into a dict
get_conversation_suggests200_response_dict = get_conversation_suggests200_response_instance.to_dict()
# create an instance of GetConversationSuggests200Response from a dict
get_conversation_suggests200_response_from_dict = GetConversationSuggests200Response.from_dict(get_conversation_suggests200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


