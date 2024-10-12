# EmployerLink

The employee summarys' employer link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.employer_link import EmployerLink

# TODO update the JSON string below
json = "{}"
# create an instance of EmployerLink from a JSON string
employer_link_instance = EmployerLink.from_json(json)
# print the JSON string representation of the object
print(EmployerLink.to_json())

# convert the object into a dict
employer_link_dict = employer_link_instance.to_dict()
# create an instance of EmployerLink from a dict
employer_link_from_dict = EmployerLink.from_dict(employer_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


