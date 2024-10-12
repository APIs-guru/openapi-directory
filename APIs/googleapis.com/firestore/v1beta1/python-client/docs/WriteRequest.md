# WriteRequest

The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels associated with this write request. | [optional] 
**stream_id** | **str** | The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created. | [optional] 
**stream_token** | **bytearray** | A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the &#x60;stream_id&#x60; field. Leave this field unset when creating a new stream. | [optional] 
**writes** | [**List[Write]**](Write.md) | The writes to apply. Always executed atomically and in order. This must be empty on the first request. This may be empty on the last request. This must not be empty on all other requests. | [optional] 

## Example

```python
from openapi_client.models.write_request import WriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WriteRequest from a JSON string
write_request_instance = WriteRequest.from_json(json)
# print the JSON string representation of the object
print(WriteRequest.to_json())

# convert the object into a dict
write_request_dict = write_request_instance.to_dict()
# create an instance of WriteRequest from a dict
write_request_from_dict = WriteRequest.from_dict(write_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


