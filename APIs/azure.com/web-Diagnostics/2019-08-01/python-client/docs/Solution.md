# Solution

Class Representing Solution for problems detected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[List[AnalysisDataDataInnerInner]]** | Solution Data. | [optional] 
**description** | **str** | Description of the solution | [optional] 
**display_name** | **str** | Display Name of the solution | [optional] 
**id** | **float** | Solution Id. | [optional] 
**metadata** | **List[List[AnalysisDataDataInnerInner]]** | Solution Metadata. | [optional] 
**order** | **float** | Order of the solution. | [optional] 
**type** | **str** | Type of Solution | [optional] 

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


