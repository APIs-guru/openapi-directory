# SolutionDetails

Class representing the details of the solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_count** | **int** | Gets or sets the count of assessments reported by the solution. | [optional] 
**extended_details** | **Dict[str, str]** | Gets or sets the extended details reported by the solution. | [optional] 
**group_count** | **int** | Gets or sets the count of groups reported by the solution. | [optional] 

## Example

```python
from openapi_client.models.solution_details import SolutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionDetails from a JSON string
solution_details_instance = SolutionDetails.from_json(json)
# print the JSON string representation of the object
print(SolutionDetails.to_json())

# convert the object into a dict
solution_details_dict = solution_details_instance.to_dict()
# create an instance of SolutionDetails from a dict
solution_details_from_dict = SolutionDetails.from_dict(solution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


