# ListTranscoderRecordings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcoder** | [**Transcoder2**](Transcoder2.md) |  | 

## Example

```python
from openapi_client.models.list_transcoder_recordings200_response import ListTranscoderRecordings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListTranscoderRecordings200Response from a JSON string
list_transcoder_recordings200_response_instance = ListTranscoderRecordings200Response.from_json(json)
# print the JSON string representation of the object
print(ListTranscoderRecordings200Response.to_json())

# convert the object into a dict
list_transcoder_recordings200_response_dict = list_transcoder_recordings200_response_instance.to_dict()
# create an instance of ListTranscoderRecordings200Response from a dict
list_transcoder_recordings200_response_from_dict = ListTranscoderRecordings200Response.from_dict(list_transcoder_recordings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


