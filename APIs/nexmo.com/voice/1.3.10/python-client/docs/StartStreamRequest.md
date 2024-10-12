# StartStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | Set the audio level of the stream in the range &#x60;-1 &gt;&#x3D; level &lt;&#x3D; 1&#x60; with a precision of 0.1. The default value is 0. | [optional] [default to '0']
**loop** | **int** | the number of times to play the file, 0 for infinite | [optional] [default to 1]
**stream_url** | **List[str]** |  | 

## Example

```python
from openapi_client.models.start_stream_request import StartStreamRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartStreamRequest from a JSON string
start_stream_request_instance = StartStreamRequest.from_json(json)
# print the JSON string representation of the object
print(StartStreamRequest.to_json())

# convert the object into a dict
start_stream_request_dict = start_stream_request_instance.to_dict()
# create an instance of StartStreamRequest from a dict
start_stream_request_from_dict = StartStreamRequest.from_dict(start_stream_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


