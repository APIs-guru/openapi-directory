# RecognizeFile200ResponseProcessingTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plates** | **float** | Time spent performing license plate recognition (in milliseconds) | [optional] 
**total** | **float** | Time spent processing all tasks (in milliseconds) | [optional] 
**vehicles** | **float** | Time spent performing vehicle recognition (in milliseconds) | [optional] 

## Example

```python
from openapi_client.models.recognize_file200_response_processing_time import RecognizeFile200ResponseProcessingTime

# TODO update the JSON string below
json = "{}"
# create an instance of RecognizeFile200ResponseProcessingTime from a JSON string
recognize_file200_response_processing_time_instance = RecognizeFile200ResponseProcessingTime.from_json(json)
# print the JSON string representation of the object
print(RecognizeFile200ResponseProcessingTime.to_json())

# convert the object into a dict
recognize_file200_response_processing_time_dict = recognize_file200_response_processing_time_instance.to_dict()
# create an instance of RecognizeFile200ResponseProcessingTime from a dict
recognize_file200_response_processing_time_from_dict = RecognizeFile200ResponseProcessingTime.from_dict(recognize_file200_response_processing_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


