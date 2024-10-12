# ExternalSecuritySolutionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[ExternalSecuritySolution]**](ExternalSecuritySolution.md) |  | [optional] 

## Example

```python
from openapi_client.models.external_security_solution_list import ExternalSecuritySolutionList

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSecuritySolutionList from a JSON string
external_security_solution_list_instance = ExternalSecuritySolutionList.from_json(json)
# print the JSON string representation of the object
print(ExternalSecuritySolutionList.to_json())

# convert the object into a dict
external_security_solution_list_dict = external_security_solution_list_instance.to_dict()
# create an instance of ExternalSecuritySolutionList from a dict
external_security_solution_list_from_dict = ExternalSecuritySolutionList.from_dict(external_security_solution_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


