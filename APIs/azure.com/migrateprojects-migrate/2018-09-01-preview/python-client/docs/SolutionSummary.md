# SolutionSummary

The solution summary class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.solution_summary import SolutionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionSummary from a JSON string
solution_summary_instance = SolutionSummary.from_json(json)
# print the JSON string representation of the object
print(SolutionSummary.to_json())

# convert the object into a dict
solution_summary_dict = solution_summary_instance.to_dict()
# create an instance of SolutionSummary from a dict
solution_summary_from_dict = SolutionSummary.from_dict(solution_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


