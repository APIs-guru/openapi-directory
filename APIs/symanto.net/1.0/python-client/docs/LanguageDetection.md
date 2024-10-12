# LanguageDetection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | id of the text. | [optional] 
**text** | **str** | the text itself. | 

## Example

```python
from openapi_client.models.language_detection import LanguageDetection

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageDetection from a JSON string
language_detection_instance = LanguageDetection.from_json(json)
# print the JSON string representation of the object
print(LanguageDetection.to_json())

# convert the object into a dict
language_detection_dict = language_detection_instance.to_dict()
# create an instance of LanguageDetection from a dict
language_detection_from_dict = LanguageDetection.from_dict(language_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


