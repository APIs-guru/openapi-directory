# ExternalSecuritySolutionKind

Describes an Azure resource with kind

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the external solution | [optional] 

## Example

```python
from openapi_client.models.external_security_solution_kind import ExternalSecuritySolutionKind

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSecuritySolutionKind from a JSON string
external_security_solution_kind_instance = ExternalSecuritySolutionKind.from_json(json)
# print the JSON string representation of the object
print(ExternalSecuritySolutionKind.to_json())

# convert the object into a dict
external_security_solution_kind_dict = external_security_solution_kind_instance.to_dict()
# create an instance of ExternalSecuritySolutionKind from a dict
external_security_solution_kind_from_dict = ExternalSecuritySolutionKind.from_dict(external_security_solution_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


