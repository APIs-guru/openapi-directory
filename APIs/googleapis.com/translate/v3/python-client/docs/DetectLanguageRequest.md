# DetectLanguageRequest

The request message for language detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content of the input stored as a string. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. | [optional] 
**mime_type** | **str** | Optional. The format of the source text, for example, \&quot;text/html\&quot;, \&quot;text/plain\&quot;. If left blank, the MIME type defaults to \&quot;text/html\&quot;. | [optional] 
**model** | **str** | Optional. The language detection model to be used. Format: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}&#x60; Only one language detection model is currently supported: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default&#x60;. If not specified, the default model is used. | [optional] 

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


