# RecognitionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lines** | [**List[Line]**](Line.md) |  | [optional] 

## Example

```python
from openapi_client.models.recognition_result import RecognitionResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionResult from a JSON string
recognition_result_instance = RecognitionResult.from_json(json)
# print the JSON string representation of the object
print(RecognitionResult.to_json())

# convert the object into a dict
recognition_result_dict = recognition_result_instance.to_dict()
# create an instance of RecognitionResult from a dict
recognition_result_from_dict = RecognitionResult.from_dict(recognition_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


