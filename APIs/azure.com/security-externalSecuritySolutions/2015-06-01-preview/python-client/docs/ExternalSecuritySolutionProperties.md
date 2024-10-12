# ExternalSecuritySolutionProperties

The solution properties (correspond to the solution kind)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** |  | [optional] 
**device_vendor** | **str** |  | [optional] 
**workspace** | [**ConnectedWorkspace**](ConnectedWorkspace.md) |  | [optional] 

## Example

```python
from openapi_client.models.external_security_solution_properties import ExternalSecuritySolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSecuritySolutionProperties from a JSON string
external_security_solution_properties_instance = ExternalSecuritySolutionProperties.from_json(json)
# print the JSON string representation of the object
print(ExternalSecuritySolutionProperties.to_json())

# convert the object into a dict
external_security_solution_properties_dict = external_security_solution_properties_instance.to_dict()
# create an instance of ExternalSecuritySolutionProperties from a dict
external_security_solution_properties_from_dict = ExternalSecuritySolutionProperties.from_dict(external_security_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


