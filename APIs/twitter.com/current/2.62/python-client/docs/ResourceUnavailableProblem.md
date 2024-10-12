# ResourceUnavailableProblem

A problem that indicates a particular Tweet, User, etc. is not available to you.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** |  | 
**resource_id** | **str** |  | 
**resource_type** | **str** |  | 

## Example

```python
from openapi_client.models.resource_unavailable_problem import ResourceUnavailableProblem

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUnavailableProblem from a JSON string
resource_unavailable_problem_instance = ResourceUnavailableProblem.from_json(json)
# print the JSON string representation of the object
print(ResourceUnavailableProblem.to_json())

# convert the object into a dict
resource_unavailable_problem_dict = resource_unavailable_problem_instance.to_dict()
# create an instance of ResourceUnavailableProblem from a dict
resource_unavailable_problem_from_dict = ResourceUnavailableProblem.from_dict(resource_unavailable_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


