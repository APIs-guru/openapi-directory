# Solution

The container for solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**plan** | [**SolutionPlan**](SolutionPlan.md) |  | [optional] 
**properties** | [**SolutionProperties**](SolutionProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.solution import Solution

# TODO update the JSON string below
json = "{}"
# create an instance of Solution from a JSON string
solution_instance = Solution.from_json(json)
# print the JSON string representation of the object
print(Solution.to_json())

# convert the object into a dict
solution_dict = solution_instance.to_dict()
# create an instance of Solution from a dict
solution_from_dict = Solution.from_dict(solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


