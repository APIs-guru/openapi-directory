# PersonalNameObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | In some cases, the name will need to be supplied in \&quot;long form\&quot;, such as when it is determined from a document scan, or is un-parsable in some way. The service will attempt to convert it to it&#39;s constituent parts where possible.  | [optional] 
**family_name** | **str** | Family name / Surname of the individual. | 
**given_name** | **str** | First / Given name | [optional] 
**honourific** | **str** | Mr/Ms/Dr/Dame/Dato/etc. | [optional] 
**middle_name** | **str** | Middle name(s) / Initials | [optional] 

## Example

```python
from openapi_client.models.personal_name_object import PersonalNameObject

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameObject from a JSON string
personal_name_object_instance = PersonalNameObject.from_json(json)
# print the JSON string representation of the object
print(PersonalNameObject.to_json())

# convert the object into a dict
personal_name_object_dict = personal_name_object_instance.to_dict()
# create an instance of PersonalNameObject from a dict
personal_name_object_from_dict = PersonalNameObject.from_dict(personal_name_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


