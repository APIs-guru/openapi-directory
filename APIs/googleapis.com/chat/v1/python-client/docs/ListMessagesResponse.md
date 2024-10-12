# ListMessagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[Message]**](Message.md) | List of messages. | [optional] 
**next_page_token** | **str** | You can send a token as &#x60;pageToken&#x60; to retrieve the next page of results. If empty, there are no subsequent pages. | [optional] 

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


