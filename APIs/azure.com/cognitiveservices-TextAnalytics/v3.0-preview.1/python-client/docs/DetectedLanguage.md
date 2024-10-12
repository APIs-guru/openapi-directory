# DetectedLanguage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iso6391_name** | **str** | A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr). | 
**name** | **str** | Long name of a detected language (e.g. English, French). | 
**score** | **float** | A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. | 

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


