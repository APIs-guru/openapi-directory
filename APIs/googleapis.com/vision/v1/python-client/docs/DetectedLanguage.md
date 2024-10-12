# DetectedLanguage

Detected language for a structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence of detected language. Range [0, 1]. | [optional] 
**language_code** | **str** | The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 

## Example

```python
from openapi_client.models.detected_language import DetectedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedLanguage from a JSON string
detected_language_instance = DetectedLanguage.from_json(json)
# print the JSON string representation of the object
print(DetectedLanguage.to_json())

# convert the object into a dict
detected_language_dict = detected_language_instance.to_dict()
# create an instance of DetectedLanguage from a dict
detected_language_from_dict = DetectedLanguage.from_dict(detected_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


