# MultiLanguageInput

Contains an input document to be analyzed by the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique, non-empty document identifier. | 
**language** | **str** | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use \&quot;en\&quot; for English; \&quot;es\&quot; for Spanish etc. If not set, use \&quot;en\&quot; for English as default. | [optional] 
**text** | **str** | The input text to process. | 

## Example

```python
from openapi_client.models.multi_language_input import MultiLanguageInput

# TODO update the JSON string below
json = "{}"
# create an instance of MultiLanguageInput from a JSON string
multi_language_input_instance = MultiLanguageInput.from_json(json)
# print the JSON string representation of the object
print(MultiLanguageInput.to_json())

# convert the object into a dict
multi_language_input_dict = multi_language_input_instance.to_dict()
# create an instance of MultiLanguageInput from a dict
multi_language_input_from_dict = MultiLanguageInput.from_dict(multi_language_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


