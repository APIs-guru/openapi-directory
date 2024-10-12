# StreamInformationObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**playback_url** | **str** |  | 
**stream_url** | **str** |  | 

## Example

```python
from openapi_client.models.stream_information_object import StreamInformationObject

# TODO update the JSON string below
json = "{}"
# create an instance of StreamInformationObject from a JSON string
stream_information_object_instance = StreamInformationObject.from_json(json)
# print the JSON string representation of the object
print(StreamInformationObject.to_json())

# convert the object into a dict
stream_information_object_dict = stream_information_object_instance.to_dict()
# create an instance of StreamInformationObject from a dict
stream_information_object_from_dict = StreamInformationObject.from_dict(stream_information_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


