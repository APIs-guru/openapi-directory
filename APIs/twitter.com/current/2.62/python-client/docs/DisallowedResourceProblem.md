# DisallowedResourceProblem

A problem that indicates that the resource requested violates the precepts of this API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** |  | 
**resource_type** | **str** |  | 
**section** | **str** |  | 

## Example

```python
from openapi_client.models.disallowed_resource_problem import DisallowedResourceProblem

# TODO update the JSON string below
json = "{}"
# create an instance of DisallowedResourceProblem from a JSON string
disallowed_resource_problem_instance = DisallowedResourceProblem.from_json(json)
# print the JSON string representation of the object
print(DisallowedResourceProblem.to_json())

# convert the object into a dict
disallowed_resource_problem_dict = disallowed_resource_problem_instance.to_dict()
# create an instance of DisallowedResourceProblem from a dict
disallowed_resource_problem_from_dict = DisallowedResourceProblem.from_dict(disallowed_resource_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


