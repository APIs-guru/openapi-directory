# AadExternalSecuritySolution

Represents an AAD identity protection solution which sends logs to an OMS workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AadSolutionProperties**](AadSolutionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**kind** | **str** | The kind of the external solution | [optional] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.aad_external_security_solution import AadExternalSecuritySolution

# TODO update the JSON string below
json = "{}"
# create an instance of AadExternalSecuritySolution from a JSON string
aad_external_security_solution_instance = AadExternalSecuritySolution.from_json(json)
# print the JSON string representation of the object
print(AadExternalSecuritySolution.to_json())

# convert the object into a dict
aad_external_security_solution_dict = aad_external_security_solution_instance.to_dict()
# create an instance of AadExternalSecuritySolution from a dict
aad_external_security_solution_from_dict = AadExternalSecuritySolution.from_dict(aad_external_security_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


