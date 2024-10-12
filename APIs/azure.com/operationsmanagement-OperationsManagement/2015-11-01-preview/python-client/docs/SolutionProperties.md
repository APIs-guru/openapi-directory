# SolutionProperties

Solution properties supported by the OperationsManagement resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contained_resources** | **List[str]** | The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted. | [optional] 
**provisioning_state** | **str** | The provisioning state for the solution. | [optional] [readonly] 
**referenced_resources** | **List[str]** | The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution. | [optional] 
**workspace_resource_id** | **str** | The azure resourceId for the workspace where the solution will be deployed/enabled. | 

## Example

```python
from openapi_client.models.solution_properties import SolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionProperties from a JSON string
solution_properties_instance = SolutionProperties.from_json(json)
# print the JSON string representation of the object
print(SolutionProperties.to_json())

# convert the object into a dict
solution_properties_dict = solution_properties_instance.to_dict()
# create an instance of SolutionProperties from a dict
solution_properties_from_dict = SolutionProperties.from_dict(solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


