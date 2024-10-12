# CefExternalSecuritySolution

Represents a security solution which sends CEF logs to an OMS workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CefSolutionProperties**](CefSolutionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**kind** | **str** | The kind of the external solution | [optional] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.cef_external_security_solution import CefExternalSecuritySolution

# TODO update the JSON string below
json = "{}"
# create an instance of CefExternalSecuritySolution from a JSON string
cef_external_security_solution_instance = CefExternalSecuritySolution.from_json(json)
# print the JSON string representation of the object
print(CefExternalSecuritySolution.to_json())

# convert the object into a dict
cef_external_security_solution_dict = cef_external_security_solution_instance.to_dict()
# create an instance of CefExternalSecuritySolution from a dict
cef_external_security_solution_from_dict = CefExternalSecuritySolution.from_dict(cef_external_security_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


