# ProblemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | A human-readable explanation specific to this occurrence of the problem | [optional] 
**instance** | **str** | A URI reference that identifies the specific occurrence of the problem | [optional] 
**status** | **int** | The HTTP status code for this occurrence of the problem | [optional] 
**title** | **str** | A short, human-readable summary of the problem type | [optional] 
**type** | **str** | A URI reference according to IETF RFC 3986 that identifies the problem type | [optional] 

## Example

```python
from openapi_client.models.problem_details import ProblemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemDetails from a JSON string
problem_details_instance = ProblemDetails.from_json(json)
# print the JSON string representation of the object
print(ProblemDetails.to_json())

# convert the object into a dict
problem_details_dict = problem_details_instance.to_dict()
# create an instance of ProblemDetails from a dict
problem_details_from_dict = ProblemDetails.from_dict(problem_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


