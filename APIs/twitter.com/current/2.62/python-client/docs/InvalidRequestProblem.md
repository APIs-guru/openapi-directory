# InvalidRequestProblem

A problem that indicates this request is invalid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[InvalidRequestProblemAllOfErrors]**](InvalidRequestProblemAllOfErrors.md) |  | [optional] 

## Example

```python
from openapi_client.models.invalid_request_problem import InvalidRequestProblem

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidRequestProblem from a JSON string
invalid_request_problem_instance = InvalidRequestProblem.from_json(json)
# print the JSON string representation of the object
print(InvalidRequestProblem.to_json())

# convert the object into a dict
invalid_request_problem_dict = invalid_request_problem_instance.to_dict()
# create an instance of InvalidRequestProblem from a dict
invalid_request_problem_from_dict = InvalidRequestProblem.from_dict(invalid_request_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


