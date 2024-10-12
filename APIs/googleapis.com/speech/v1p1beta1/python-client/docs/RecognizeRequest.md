# RecognizeRequest

The top-level message sent by the client for the `Recognize` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**RecognitionAudio**](RecognitionAudio.md) |  | [optional] 
**config** | [**RecognitionConfig**](RecognitionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.recognize_request import RecognizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizeRequest from a JSON string
recognize_request_instance = RecognizeRequest.from_json(json)
# print the JSON string representation of the object
print(RecognizeRequest.to_json())

# convert the object into a dict
recognize_request_dict = recognize_request_instance.to_dict()
# create an instance of RecognizeRequest from a dict
recognize_request_from_dict = RecognizeRequest.from_dict(recognize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


