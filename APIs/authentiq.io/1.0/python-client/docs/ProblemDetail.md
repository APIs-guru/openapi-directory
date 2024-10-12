# ProblemDetail

HTTP Problem Detail 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Human-readable explanation specific to this occurrence of the problem.  | [optional] 
**status** | **int** | The HTTP status code for this occurrence of the problem.  | 
**title** | **str** | Human-readable summary of the problem type.  | [optional] 
**type** | **str** |  | [default to 'about:blank']

## Example

```python
from openapi_client.models.problem_detail import ProblemDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemDetail from a JSON string
problem_detail_instance = ProblemDetail.from_json(json)
# print the JSON string representation of the object
print(ProblemDetail.to_json())

# convert the object into a dict
problem_detail_dict = problem_detail_instance.to_dict()
# create an instance of ProblemDetail from a dict
problem_detail_from_dict = ProblemDetail.from_dict(problem_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


