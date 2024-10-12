# GenericProblem

A generic problem with no additional information beyond that provided by the HTTP status code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.generic_problem import GenericProblem

# TODO update the JSON string below
json = "{}"
# create an instance of GenericProblem from a JSON string
generic_problem_instance = GenericProblem.from_json(json)
# print the JSON string representation of the object
print(GenericProblem.to_json())

# convert the object into a dict
generic_problem_dict = generic_problem_instance.to_dict()
# create an instance of GenericProblem from a dict
generic_problem_from_dict = GenericProblem.from_dict(generic_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


