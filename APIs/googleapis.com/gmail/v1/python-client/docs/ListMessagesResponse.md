# ListMessagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[Message]**](Message.md) | List of messages. Note that each message resource contains only an &#x60;id&#x60; and a &#x60;threadId&#x60;. Additional message details can be fetched using the messages.get method. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results in the list. | [optional] 
**result_size_estimate** | **int** | Estimated total number of results. | [optional] 

## Example

```python
from openapi_client.models.list_messages_response import ListMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMessagesResponse from a JSON string
list_messages_response_instance = ListMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListMessagesResponse.to_json())

# convert the object into a dict
list_messages_response_dict = list_messages_response_instance.to_dict()
# create an instance of ListMessagesResponse from a dict
list_messages_response_from_dict = ListMessagesResponse.from_dict(list_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


