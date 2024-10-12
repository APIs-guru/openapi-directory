# ResourceUnauthorizedProblem

A problem that indicates you are not allowed to see a particular Tweet, User, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** |  | 
**resource_id** | **str** |  | 
**resource_type** | **str** |  | 
**section** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.resource_unauthorized_problem import ResourceUnauthorizedProblem

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUnauthorizedProblem from a JSON string
resource_unauthorized_problem_instance = ResourceUnauthorizedProblem.from_json(json)
# print the JSON string representation of the object
print(ResourceUnauthorizedProblem.to_json())

# convert the object into a dict
resource_unauthorized_problem_dict = resource_unauthorized_problem_instance.to_dict()
# create an instance of ResourceUnauthorizedProblem from a dict
resource_unauthorized_problem_from_dict = ResourceUnauthorizedProblem.from_dict(resource_unauthorized_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


