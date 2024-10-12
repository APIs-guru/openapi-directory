# ListSessionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_session** | [**List[Session]**](Session.md) | If includeDeleted is set to true in the request, and startTime and endTime are omitted, this will include sessions which were deleted since the last sync. | [optional] 
**has_more_data** | **bool** | Flag to indicate server has more data to transfer. DO NOT USE THIS FIELD. It is never populated in responses from the server. | [optional] 
**next_page_token** | **str** | The sync token which is used to sync further changes. This will only be provided if both startTime and endTime are omitted from the request. | [optional] 
**session** | [**List[Session]**](Session.md) | Sessions with an end time that is between startTime and endTime of the request. | [optional] 

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


