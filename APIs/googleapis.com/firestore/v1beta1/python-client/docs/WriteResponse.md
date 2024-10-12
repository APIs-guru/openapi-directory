# WriteResponse

The response for Firestore.Write.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_time** | **str** | The time at which the commit occurred. Any read with an equal or greater &#x60;read_time&#x60; is guaranteed to see the effects of the write. | [optional] 
**stream_id** | **str** | The ID of the stream. Only set on the first message, when a new stream was created. | [optional] 
**stream_token** | **bytearray** | A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set. | [optional] 
**write_results** | [**List[WriteResult]**](WriteResult.md) | The result of applying the writes. This i-th write result corresponds to the i-th write in the request. | [optional] 

## Example

```python
from openapi_client.models.write_response import WriteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WriteResponse from a JSON string
write_response_instance = WriteResponse.from_json(json)
# print the JSON string representation of the object
print(WriteResponse.to_json())

# convert the object into a dict
write_response_dict = write_response_instance.to_dict()
# create an instance of WriteResponse from a dict
write_response_from_dict = WriteResponse.from_dict(write_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


