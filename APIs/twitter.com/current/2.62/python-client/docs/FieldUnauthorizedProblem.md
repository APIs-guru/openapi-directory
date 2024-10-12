# FieldUnauthorizedProblem

A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | 
**resource_type** | **str** |  | 
**section** | **str** |  | 

## Example

```python
from openapi_client.models.field_unauthorized_problem import FieldUnauthorizedProblem

# TODO update the JSON string below
json = "{}"
# create an instance of FieldUnauthorizedProblem from a JSON string
field_unauthorized_problem_instance = FieldUnauthorizedProblem.from_json(json)
# print the JSON string representation of the object
print(FieldUnauthorizedProblem.to_json())

# convert the object into a dict
field_unauthorized_problem_dict = field_unauthorized_problem_instance.to_dict()
# create an instance of FieldUnauthorizedProblem from a dict
field_unauthorized_problem_from_dict = FieldUnauthorizedProblem.from_dict(field_unauthorized_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


