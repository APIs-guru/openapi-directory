# Romanization

A single romanization response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_language_code** | **str** | The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. | [optional] 
**romanized_text** | **str** | Romanized text. If an error occurs during romanization, this field might be excluded from the response. | [optional] 

## Example

```python
from openapi_client.models.romanization import Romanization

# TODO update the JSON string below
json = "{}"
# create an instance of Romanization from a JSON string
romanization_instance = Romanization.from_json(json)
# print the JSON string representation of the object
print(Romanization.to_json())

# convert the object into a dict
romanization_dict = romanization_instance.to_dict()
# create an instance of Romanization from a dict
romanization_from_dict = Romanization.from_dict(romanization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


