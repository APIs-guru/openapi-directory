# EmployerCore

The cis transactions' employer core

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.employer_core import EmployerCore

# TODO update the JSON string below
json = "{}"
# create an instance of EmployerCore from a JSON string
employer_core_instance = EmployerCore.from_json(json)
# print the JSON string representation of the object
print(EmployerCore.to_json())

# convert the object into a dict
employer_core_dict = employer_core_instance.to_dict()
# create an instance of EmployerCore from a dict
employer_core_from_dict = EmployerCore.from_dict(employer_core_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


