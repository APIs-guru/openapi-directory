# Name

A person's name. If the name is a mononym, the family name is empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name formatted according to the locale specified by the viewer&#39;s account or the &#x60;Accept-Language&#x60; HTTP header. | [optional] [readonly] 
**display_name_last_first** | **str** | Output only. The display name with the last name first formatted according to the locale specified by the viewer&#39;s account or the &#x60;Accept-Language&#x60; HTTP header. | [optional] [readonly] 
**family_name** | **str** | The family name. | [optional] 
**given_name** | **str** | The given name. | [optional] 
**honorific_prefix** | **str** | The honorific prefixes, such as &#x60;Mrs.&#x60; or &#x60;Dr.&#x60; | [optional] 
**honorific_suffix** | **str** | The honorific suffixes, such as &#x60;Jr.&#x60; | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**middle_name** | **str** | The middle name(s). | [optional] 
**phonetic_family_name** | **str** | The family name spelled as it sounds. | [optional] 
**phonetic_full_name** | **str** | The full name spelled as it sounds. | [optional] 
**phonetic_given_name** | **str** | The given name spelled as it sounds. | [optional] 
**phonetic_honorific_prefix** | **str** | The honorific prefixes spelled as they sound. | [optional] 
**phonetic_honorific_suffix** | **str** | The honorific suffixes spelled as they sound. | [optional] 
**phonetic_middle_name** | **str** | The middle name(s) spelled as they sound. | [optional] 
**unstructured_name** | **str** | The free form name value. | [optional] 

## Example

```python
from openapi_client.models.name import Name

# TODO update the JSON string below
json = "{}"
# create an instance of Name from a JSON string
name_instance = Name.from_json(json)
# print the JSON string representation of the object
print(Name.to_json())

# convert the object into a dict
name_dict = name_instance.to_dict()
# create an instance of Name from a dict
name_from_dict = Name.from_dict(name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


