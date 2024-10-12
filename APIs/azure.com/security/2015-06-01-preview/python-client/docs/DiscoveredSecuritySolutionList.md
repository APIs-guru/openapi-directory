# DiscoveredSecuritySolutionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[DiscoveredSecuritySolution]**](DiscoveredSecuritySolution.md) |  | [optional] 

## Example

```python
from openapi_client.models.discovered_security_solution_list import DiscoveredSecuritySolutionList

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredSecuritySolutionList from a JSON string
discovered_security_solution_list_instance = DiscoveredSecuritySolutionList.from_json(json)
# print the JSON string representation of the object
print(DiscoveredSecuritySolutionList.to_json())

# convert the object into a dict
discovered_security_solution_list_dict = discovered_security_solution_list_instance.to_dict()
# create an instance of DiscoveredSecuritySolutionList from a dict
discovered_security_solution_list_from_dict = DiscoveredSecuritySolutionList.from_dict(discovered_security_solution_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


