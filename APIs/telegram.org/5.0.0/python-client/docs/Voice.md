# Voice

This object represents a voice note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Duration of the audio in seconds as defined by sender | 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**mime_type** | **str** | *Optional*. MIME type of the file as defined by sender | [optional] 

## Example

```python
from openapi_client.models.voice import Voice

# TODO update the JSON string below
json = "{}"
# create an instance of Voice from a JSON string
voice_instance = Voice.from_json(json)
# print the JSON string representation of the object
print(Voice.to_json())

# convert the object into a dict
voice_dict = voice_instance.to_dict()
# create an instance of Voice from a dict
voice_from_dict = Voice.from_dict(voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


