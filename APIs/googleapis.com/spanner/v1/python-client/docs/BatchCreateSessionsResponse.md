# BatchCreateSessionsResponse

The response for BatchCreateSessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session** | [**List[Session]**](Session.md) | The freshly created sessions. | [optional] 

## Example

```python
from openapi_client.models.batch_create_sessions_response import BatchCreateSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateSessionsResponse from a JSON string
batch_create_sessions_response_instance = BatchCreateSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateSessionsResponse.to_json())

# convert the object into a dict
batch_create_sessions_response_dict = batch_create_sessions_response_instance.to_dict()
# create an instance of BatchCreateSessionsResponse from a dict
batch_create_sessions_response_from_dict = BatchCreateSessionsResponse.from_dict(batch_create_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


