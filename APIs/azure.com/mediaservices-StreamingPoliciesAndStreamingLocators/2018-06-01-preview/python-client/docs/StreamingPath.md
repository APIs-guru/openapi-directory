# StreamingPath

Class of paths for streaming

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_scheme** | **str** | Encryption scheme | 
**paths** | **List[str]** | Streaming paths for each protocol and encryptionScheme pair | [optional] 
**streaming_protocol** | **str** | Streaming protocol | 

## Example

```python
from openapi_client.models.streaming_path import StreamingPath

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPath from a JSON string
streaming_path_instance = StreamingPath.from_json(json)
# print the JSON string representation of the object
print(StreamingPath.to_json())

# convert the object into a dict
streaming_path_dict = streaming_path_instance.to_dict()
# create an instance of StreamingPath from a dict
streaming_path_from_dict = StreamingPath.from_dict(streaming_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


