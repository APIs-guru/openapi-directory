# CreateSessionRequest

The request for CreateSession.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session** | [**Session**](Session.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_session_request import CreateSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSessionRequest from a JSON string
create_session_request_instance = CreateSessionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSessionRequest.to_json())

# convert the object into a dict
create_session_request_dict = create_session_request_instance.to_dict()
# create an instance of CreateSessionRequest from a dict
create_session_request_from_dict = CreateSessionRequest.from_dict(create_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


