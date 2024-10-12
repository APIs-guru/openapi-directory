# BatchCreateSessionsRequest

The request for BatchCreateSessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_count** | **int** | Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary). | [optional] 
**session_template** | [**Session**](Session.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_create_sessions_request import BatchCreateSessionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateSessionsRequest from a JSON string
batch_create_sessions_request_instance = BatchCreateSessionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateSessionsRequest.to_json())

# convert the object into a dict
batch_create_sessions_request_dict = batch_create_sessions_request_instance.to_dict()
# create an instance of BatchCreateSessionsRequest from a dict
batch_create_sessions_request_from_dict = BatchCreateSessionsRequest.from_dict(batch_create_sessions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


