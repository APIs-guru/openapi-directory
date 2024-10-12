# ConversationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PaginatedResponseError**](PaginatedResponseError.md) |  | [optional] 
**pagination** | [**PaginatedResponsePagination**](PaginatedResponsePagination.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**List[Conversation]**](Conversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.conversations_response import ConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsResponse from a JSON string
conversations_response_instance = ConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(ConversationsResponse.to_json())

# convert the object into a dict
conversations_response_dict = conversations_response_instance.to_dict()
# create an instance of ConversationsResponse from a dict
conversations_response_from_dict = ConversationsResponse.from_dict(conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


