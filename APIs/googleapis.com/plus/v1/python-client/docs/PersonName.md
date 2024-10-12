# PersonName

An object representation of the individual components of a person's name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family_name** | **str** | The family name (last name) of this person. | [optional] 
**formatted** | **str** | The full name of this person, including middle names, suffixes, etc. | [optional] 
**given_name** | **str** | The given name (first name) of this person. | [optional] 
**honorific_prefix** | **str** | The honorific prefixes (such as \&quot;Dr.\&quot; or \&quot;Mrs.\&quot;) for this person. | [optional] 
**honorific_suffix** | **str** | The honorific suffixes (such as \&quot;Jr.\&quot;) for this person. | [optional] 
**middle_name** | **str** | The middle name of this person. | [optional] 

## Example

```python
from openapi_client.models.person_name import PersonName

# TODO update the JSON string below
json = "{}"
# create an instance of PersonName from a JSON string
person_name_instance = PersonName.from_json(json)
# print the JSON string representation of the object
print(PersonName.to_json())

# convert the object into a dict
person_name_dict = person_name_instance.to_dict()
# create an instance of PersonName from a dict
person_name_from_dict = PersonName.from_dict(person_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


