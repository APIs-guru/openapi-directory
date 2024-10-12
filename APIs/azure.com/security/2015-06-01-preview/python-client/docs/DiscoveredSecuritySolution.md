# DiscoveredSecuritySolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiscoveredSecuritySolutionProperties**](DiscoveredSecuritySolutionProperties.md) |  | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.discovered_security_solution import DiscoveredSecuritySolution

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredSecuritySolution from a JSON string
discovered_security_solution_instance = DiscoveredSecuritySolution.from_json(json)
# print the JSON string representation of the object
print(DiscoveredSecuritySolution.to_json())

# convert the object into a dict
discovered_security_solution_dict = discovered_security_solution_instance.to_dict()
# create an instance of DiscoveredSecuritySolution from a dict
discovered_security_solution_from_dict = DiscoveredSecuritySolution.from_dict(discovered_security_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


