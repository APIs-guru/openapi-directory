# ListSessionsResponse

The response for ListSessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListSessions call to fetch more of the matching sessions. | [optional] 
**sessions** | [**List[Session]**](Session.md) | The list of requested sessions. | [optional] 

## Example

```python
from openapi_client.models.list_sessions_response import ListSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSessionsResponse from a JSON string
list_sessions_response_instance = ListSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSessionsResponse.to_json())

# convert the object into a dict
list_sessions_response_dict = list_sessions_response_instance.to_dict()
# create an instance of ListSessionsResponse from a dict
list_sessions_response_from_dict = ListSessionsResponse.from_dict(list_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


