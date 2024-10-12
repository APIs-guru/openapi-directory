# SubjectAlternativeNames

The subject alternate names of a X509 object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_names** | **List[str]** | Domain names. | [optional] 
**emails** | **List[str]** | Email addresses. | [optional] 
**upns** | **List[str]** | User principal names. | [optional] 

## Example

```python
from openapi_client.models.subject_alternative_names import SubjectAlternativeNames

# TODO update the JSON string below
json = "{}"
# create an instance of SubjectAlternativeNames from a JSON string
subject_alternative_names_instance = SubjectAlternativeNames.from_json(json)
# print the JSON string representation of the object
print(SubjectAlternativeNames.to_json())

# convert the object into a dict
subject_alternative_names_dict = subject_alternative_names_instance.to_dict()
# create an instance of SubjectAlternativeNames from a dict
subject_alternative_names_from_dict = SubjectAlternativeNames.from_dict(subject_alternative_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


