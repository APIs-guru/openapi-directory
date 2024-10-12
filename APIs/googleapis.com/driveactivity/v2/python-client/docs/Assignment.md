# Assignment

A comment with an assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_user** | [**User**](User.md) |  | [optional] 
**subtype** | **str** | The sub-type of this event. | [optional] 

## Example

```python
from openapi_client.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


