# DetectLanguageRequest

The request message for language detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**q** | **List[str]** | The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs. | [optional] 

## Example

```python
from openapi_client.models.detect_language_request import DetectLanguageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DetectLanguageRequest from a JSON string
detect_language_request_instance = DetectLanguageRequest.from_json(json)
# print the JSON string representation of the object
print(DetectLanguageRequest.to_json())

# convert the object into a dict
detect_language_request_dict = detect_language_request_instance.to_dict()
# create an instance of DetectLanguageRequest from a dict
detect_language_request_from_dict = DetectLanguageRequest.from_dict(detect_language_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


