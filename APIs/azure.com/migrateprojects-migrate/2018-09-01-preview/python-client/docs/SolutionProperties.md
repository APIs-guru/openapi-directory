# SolutionProperties

Class for solution properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanup_state** | **str** | Gets or sets the cleanup state of the solution. | [optional] 
**details** | [**SolutionDetails**](SolutionDetails.md) |  | [optional] 
**goal** | **str** | Gets or sets the goal of the solution. | [optional] 
**purpose** | **str** | Gets or sets the purpose of the solution. | [optional] 
**status** | **str** | Gets or sets the current status of the solution. | [optional] 
**summary** | [**SolutionSummary**](SolutionSummary.md) |  | [optional] 
**tool** | **str** | Gets or sets the tool being used in the solution. | [optional] 

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


