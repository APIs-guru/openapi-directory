# Glossary

Represents a glossary built from user provided data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. When the glossary creation was finished. | [optional] [readonly] 
**entry_count** | **int** | Output only. The number of entries defined in the glossary. | [optional] [readonly] 
**input_config** | [**GlossaryInputConfig**](GlossaryInputConfig.md) |  | [optional] 
**language_codes_set** | [**LanguageCodesSet**](LanguageCodesSet.md) |  | [optional] 
**language_pair** | [**LanguageCodePair**](LanguageCodePair.md) |  | [optional] 
**name** | **str** | Required. The resource name of the glossary. Glossary names have the form &#x60;projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}&#x60;. | [optional] 
**submit_time** | **str** | Output only. When CreateGlossary was called. | [optional] [readonly] 

## Example

```python
from openapi_client.models.glossary import Glossary

# TODO update the JSON string below
json = "{}"
# create an instance of Glossary from a JSON string
glossary_instance = Glossary.from_json(json)
# print the JSON string representation of the object
print(Glossary.to_json())

# convert the object into a dict
glossary_dict = glossary_instance.to_dict()
# create an instance of Glossary from a dict
glossary_from_dict = Glossary.from_dict(glossary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


