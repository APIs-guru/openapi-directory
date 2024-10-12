# ListMessagesResponse

Lists the messages in the specified HL7v2 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hl7_v2_messages** | [**List[Message]**](Message.md) | The returned Messages. Won&#39;t be more Messages than the value of page_size in the request. See view for populated fields. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

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


