# ResourceNotFoundProblem

A problem that indicates that a given Tweet, User, etc. does not exist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** |  | 
**resource_id** | **str** |  | 
**resource_type** | **str** |  | 
**value** | **str** | Value will match the schema of the field. | 

## Example

```python
from openapi_client.models.resource_not_found_problem import ResourceNotFoundProblem

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceNotFoundProblem from a JSON string
resource_not_found_problem_instance = ResourceNotFoundProblem.from_json(json)
# print the JSON string representation of the object
print(ResourceNotFoundProblem.to_json())

# convert the object into a dict
resource_not_found_problem_dict = resource_not_found_problem_instance.to_dict()
# create an instance of ResourceNotFoundProblem from a dict
resource_not_found_problem_from_dict = ResourceNotFoundProblem.from_dict(resource_not_found_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


