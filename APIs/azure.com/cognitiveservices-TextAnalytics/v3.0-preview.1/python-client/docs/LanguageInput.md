# LanguageInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_hint** | **str** |  | [optional] 
**id** | **str** | Unique, non-empty document identifier. | 
**text** | **str** |  | 

## Example

```python
from openapi_client.models.language_input import LanguageInput

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageInput from a JSON string
language_input_instance = LanguageInput.from_json(json)
# print the JSON string representation of the object
print(LanguageInput.to_json())

# convert the object into a dict
language_input_dict = language_input_instance.to_dict()
# create an instance of LanguageInput from a dict
language_input_from_dict = LanguageInput.from_dict(language_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


