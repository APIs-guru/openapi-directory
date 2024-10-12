# DetectLanguageResponse

The response message for language detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[DetectedLanguage]**](DetectedLanguage.md) | The most probable language detected by the Translation API. For each request, the Translation API will always return only one result. | [optional] 

## Example

```python
from openapi_client.models.detect_language_response import DetectLanguageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DetectLanguageResponse from a JSON string
detect_language_response_instance = DetectLanguageResponse.from_json(json)
# print the JSON string representation of the object
print(DetectLanguageResponse.to_json())

# convert the object into a dict
detect_language_response_dict = detect_language_response_instance.to_dict()
# create an instance of DetectLanguageResponse from a dict
detect_language_response_from_dict = DetectLanguageResponse.from_dict(detect_language_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


